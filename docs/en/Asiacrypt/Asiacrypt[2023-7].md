# Asiacrypt[2023-7]
## Antrag: Annular NTRU Trapdoor Generation - Making Mitaka as Secure as Falcon.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#antrag-annular-ntru-trapdoor-generation-making-mitaka-as-secure-as-falcon)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#antrag-annular-ntru-trapdoor-generation-making-mitaka-as-secure-as-falcon)
### Authors
* Thomas Espitau, PQShield SAS, Paris, France
* Thi Thu Quyen Nguyen, IDEMIA & Normandie Univ., UNICAEN, ENSICAEN, CNRS, GREYC, Paris, France
* Chao Sun, Osaka University, Suita, Japan
* Mehdi Tibouchi, NTT Social Informatics Laboratories, Yokosuka, Japan
* Alexandre Wallet, IRISA, Univ. Rennes 1, Inria, Bretagne-Atlantique Center, Rennes, France
### Abstract
> In this paper, we introduce a novel trapdoor generation technique for Prest’s hybrid sampler over NTRU lattices. Prest’s sampler is used in particular in the recently proposed Mitaka signature scheme (Eurocrypt 2022), a variant of the Falcon signature scheme, one of the candidates selected by NIST for standardization. Mitaka was introduced to address Falcon’s main drawback, namely the fact that the lattice Gaussian sampler used in its signature generation is highly complex, difficult to implement correctly, to parallelize or protect against side-channels, and to instantiate over rings of dimension not a power of two to reach intermediate security levels. Prest’s sampler is considerably simpler and solves these various issues, but when applying the same trapdoor generation approach as Falcon, the resulting signatures have far lower security in equal dimension. The Mitaka paper showed how certain randomness-recycling techniques could be used to mitigate this security loss, but the resulting scheme is still substantially less secure than Falcon (by around 20 to 50 bits of CoreSVP security depending on the parameters), and has much slower key generation.
> 
> Our new trapdoor generation techniques solves all of those issues satisfactorily: it gives rise to a much simpler and faster key generation algorithm than Mitaka’s (achieving similar speeds to Falcon), and is able to comfortably generate trapdoors reaching the same NIST security levels as Falcon as well. It can also be easily adapted to rings of intermediate dimensions, in order to support the same versatility as Mitaka in terms of parameter selection. All in all, this new technique combines all the advantages of both Falcon and Mitaka (and more) with none of the drawbacks.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_1](https://doi.org/10.1007/978-981-99-8739-9_1)
## G+G: A Fiat-Shamir Lattice Signature Based on Convolved Gaussians.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#g-g-a-fiat-shamir-lattice-signature-based-on-convolved-gaussians)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#g-g-a-fiat-shamir-lattice-signature-based-on-convolved-gaussians)
### Authors
* Julien Devevey, ENS de Lyon, Lyon, France
* Alain Passelègue, ENS de Lyon, Lyon, France
* Damien Stehlé, ENS de Lyon, Lyon, France
* Alain Passelègue, INRIA, Paris, France
* Alain Passelègue, CryptoLab Inc., Lyon, France
* Damien Stehlé, CryptoLab Inc., Lyon, France
### Abstract
> We describe an adaptation of Schnorr’s signature to the lattice setting, which relies on Gaussian convolution rather than flooding or rejection sampling as previous approaches. It does not involve any abort, can be proved secure in the ROM and QROM using existing analyses of the Fiat-Shamir transform, and enjoys smaller signature sizes (both asymptotically and for concrete security levels).

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_2](https://doi.org/10.1007/978-981-99-8739-9_2)
## On Gaussian Sampling, Smoothing Parameter and Application to Signatures.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#on-gaussian-sampling-smoothing-parameter-and-application-to-signatures)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#on-gaussian-sampling-smoothing-parameter-and-application-to-signatures)
### Authors
* Thomas Espitau, PQShield SAS, Paris, France
* Alexandre Wallet, Inria, IRISA, Univ. Rennes, CNRS, Rennes, France
* Yang Yu, BNRist, Tsinghua University, Beijing, China
* Yang Yu, Zhongguancun Laboratory, Beijing, China
* Yang Yu, National Financial Cryptography Research Center, Beijing, China
### Abstract
> We present a general framework for polynomial-time lattice Gaussian sampling. It revolves around a systematic study of the discrete Gaussian measure and its samplers under extensions of lattices; we first show that given lattices \(\varLambda '\subset \varLambda \) we can sample efficiently in \(\varLambda \) if we know how to do so in \(\varLambda '\) and the quotient \(\varLambda /\varLambda '\), regardless of the primitivity of \(\varLambda '\). As a direct application, we tackle the problem of domain extension and restriction for sampling and propose a sampler tailored for lattice filtrations, which can be seen as a broad generalization of the celebrated Klein’s sampler. Then, we demonstrate how to sample using a change of bases, or even switching the ambient space, even when the target lattice is not represented as full-rank in the ambient space. We show how to correct the induced distortion with the “convolution-like” technique of Peikert (Crypto 2010) (which we encompass as a byproduct). Since our framework aims at modularity and leverage the combinations of smaller samplers to build new ones, we also propose ad-hoc samplers for the so-called root lattices \(\textsf{A}_n, \textsf{D}_n, \textsf{E}_n\) as base cases, extending the state-of-the-art for root lattice sampling, which was limited to \(\textbf{Z}^n\). We also show how our framework blends with the so-called king construction and provides a sampler for the remarkable Leech and Barnes-Wall lattices.
> 
> As a by-product, we obtain novel, quasi-linear samplers for prime and smooth conductor (as \(2^\ell 3^k\)) cyclotomic rings, achieving essentially optimal Gaussian width. In a practice-oriented application, we showcase the impact of our work on hash-and-sign signatures over ntru lattices. In the best case, we can gain around 200 bytes (which corresponds to an improvement greater than 20%) on the signature size. We also improve the new gadget-based constructions (Yu, Jia, Wang, Crypto 2023) and gain up to 110 bytes for the resulting signatures.
> 
> Lastly, we sprinkle our exposition with several new estimates for the smoothing parameter of lattices, stemming from our algorithmic constructions and by novel methods based on series reversion.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_3](https://doi.org/10.1007/978-981-99-8739-9_3)
## FESTA: Fast Encryption from Supersingular Torsion Attacks.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#festa-fast-encryption-from-supersingular-torsion-attacks)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#festa-fast-encryption-from-supersingular-torsion-attacks)
### Authors
* Andrea Basso, University of Bristol, Bristol, UK
* Luciano Maino, University of Bristol, Bristol, UK
* Giacomo Pope, University of Bristol, Bristol, UK
* Giacomo Pope, NCC Group, Cheltenham, UK
### Abstract
> We introduce FESTA, an efficient isogeny-based public-key encryption (PKE) protocol based on a constructive application of the SIDH attacks.
> 
> At its core, FESTA is based on a novel trapdoor function, which uses an improved version of the techniques proposed in the SIDH attacks to develop a trapdoor mechanism. Using standard transformations, we construct an efficient PKE that is IND-CCA secure in the QROM. Additionally, using a different transformation, we obtain the first isogeny-based PKE that is IND-CCA secure in the standard model.
> 
> Lastly, we propose a method to efficiently find parameters for FESTA, and we develop a proof-of-concept implementation of the protocol. We expect FESTA to offer practical performance that is competitive with existing isogeny-based constructions.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_4](https://doi.org/10.1007/978-981-99-8739-9_4)
## A Polynomial Time Attack on Instances of M-SIDH and FESTA.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#a-polynomial-time-attack-on-instances-of-m-sidh-and-festa)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#a-polynomial-time-attack-on-instances-of-m-sidh-and-festa)
### Authors
* Wouter Castryck, COSIC, KU Leuven, Leuven, Belgium
* Frederik Vercauteren, COSIC, KU Leuven, Leuven, Belgium
### Abstract
> The recent devastating attacks on SIDH rely on the fact that the protocol reveals the images \(\varphi (P)\) and \(\varphi (Q)\) of the secret isogeny \(\varphi : E_0\rightarrow E\) on a basis \(\{P, Q\}\) of the N-torsion subgroup \(E_0[N]\) where \(N^2 > \deg (\varphi )\). To thwart this attack, two recent proposals, M-SIDH and FESTA, proceed by only revealing the images upto unknown scalars \(\lambda _1, \lambda _2 \in \mathbb {Z}_N^\times \), i.e. only \(\lambda _1 \varphi (P)\) and \(\lambda _2 \varphi (Q)\) are revealed, where \(\lambda _1 = \lambda _2\) for M-SIDH and \(\lambda _1 = \lambda _2^{-1}\) for FESTA. Similar information is leaked in CSIDH since \(\varphi \) maps the eigenspaces of Frobenius on \(E_0\) to the corresponding eigenspaces on \(E\).
> 
> In this paper, we introduce a new polynomial time attack that generalizes the well known “lollipop” attack and analyze how it applies to M-SIDH, FESTA and CSIDH. We show that M-SIDH can be broken in polynomial time whenever \(E_0\) or \(E\) is \(\mathbb {F}_p\)-rational, even when the endomorphism rings of \(E_0\) and \(E\) are unknown. This can be generalized to the case where the starting (or end) curve is not \(\mathbb {F}_p\)-rational, but is connected to its Frobenius conjugate by an isogeny of small degree.
> 
> For FESTA, where the curve \(E_0\) is already \(\mathbb {F}_p\)-rational, we obtain a polynomial time attack under the added requirement that at least one of the basis points \(P, Q\) spans an eigenspace of Frobenius, of an endomorphism of low degree, or of a composition of both. We note that the current implementation of FESTA does not choose such a basis. Since it is always possible to construct an endomorphism, typically of large degree, with either \(P, Q\) an eigenvector, we conclude that FESTA with overstretched parameters is insecure.
> 
> Although the information leaked in CSIDH is very similar to FESTA, we show that our attack does not reveal any new information about the secret isogeny, i.e. we only learn that it is \(\mathbb {F}_p\)-rational, which is a priori knowledge.
> 
> Finally, we analyze if and how it would be possible to backdoor M-SIDH and FESTA by choosing system parameters that look inconspicuous, but in fact reduce to the special cases above via a secret isogeny chosen by the adversary.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_5](https://doi.org/10.1007/978-981-99-8739-9_5)
## NEV: Faster and Smaller NTRU Encryption Using Vector Decoding.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#nev-faster-and-smaller-ntru-encryption-using-vector-decoding)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#nev-faster-and-smaller-ntru-encryption-using-vector-decoding)
### Authors
* Jiang Zhang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Dengguo Feng, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Di Yan, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
### Abstract
> In this paper, we present \(\textsf{NEV}\) – a faster and smaller NTRU Encryption using Vector decoding, which is provably IND-CPA secure in the standard model under the decisional NTRU and RLWE assumptions over the cyclotomic ring \(R_q = \mathbb {Z}_q[X]/(X^n+1)\). Our main technique is a novel and non-trivial way to integrate a previously known plaintext encoding and decoding mechanism into the provably IND-CPA secure NTRU variant by Stehlé and Steinfeld (Eurocrypt 2011). Unlike the original NTRU encryption and its variants which encode the plaintext into the least significant bits of the coefficients of a message polynomial, we encode each plaintext bit into the most significant bits of multiple coefficients of the message polynomial, so that we can use a vector of noised coefficients to decode each plaintext bit in decryption, and significantly reduce the size of q with a reasonably negligible decryption failure.
> 
> Concretely, we can use \(q = 769\) to obtain public keys and ciphertexts of 615 bytes with decryption failure \(\le 2^{-138}\) at NIST level 1 security, and 1229 bytes with decryption failure \(\le 2^{-152}\) at NIST level 5 security. By applying the Fujisaki-Okamoto transformation in a standard way, we obtain an IND-CCA secure KEM from our basic PKE scheme. Compared to NTRU and Kyber in the NIST Round 3 finalists at the same security levels, our KEM is 33–48% more compact and 5.03–29.94X faster than NTRU in the round-trip time of ephemeral key exchange, and is 21% more compact and 1.42–1.74X faster than Kyber.
> 
> We also give an optimized encryption scheme \(\textsf{NEV}'\) with better noise tolerance (and slightly better efficiency) based on a variant of the RLWE problem, called Subset-Sum Parity RLWE problem, which we show is polynomially equivalent to the standard decisional RLWE problem (with different parameters), and maybe of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_6](https://doi.org/10.1007/978-981-99-8739-9_6)
## Cryptographic Smooth Neighbors.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#cryptographic-smooth-neighbors)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#cryptographic-smooth-neighbors)
### Authors
* Giacomo Bruno, IKARUS Security Software, Vienna, Austria
* Maria Corte-Real Santos, University College London, London, UK
* Craig Costello, Microsoft Research, New York, USA
* Michael Naehrig, Microsoft Research, New York, USA
* Jonathan Komada Eriksen, Norwegian University of Science and Technology, Trondheim, Norway
* Michael Meyer, University of Regensburg, Regensburg, Germany
* Bruno Sterner, Surrey Centre for Cyber Security, University of Surrey, Guildford, UK
### Abstract
> We revisit the problem of finding two consecutive B-smooth integers by giving an optimised implementation of the Conrey-Holmstrom-McLaughlin “smooth neighbors” algorithm. While this algorithm is not guaranteed to return the complete set of B-smooth neighbors, in practice it returns a very close approximation to the complete set but does so in a tiny fraction of the time of its exhaustive counterparts. We exploit this algorithm to find record-sized solutions to the pure twin smooth problem, and subsequently to produce instances of cryptographic parameters whose corresponding isogeny degrees are significantly smoother than prior works. Our methods seem well-suited to finding parameters for the SQISign signature scheme, especially for instantiations looking to minimise the cost of signature generation. We give a number of examples, among which are the first parameter sets geared towards efficient SQISign instantiations at NIST’s security levels III and V.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_7](https://doi.org/10.1007/978-981-99-8739-9_7)
## Non-interactive Commitment from Non-transitive Group Actions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#non-interactive-commitment-from-non-transitive-group-actions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#non-interactive-commitment-from-non-transitive-group-actions)
### Authors
* Giuseppe D’Alconzo, Department of Mathematical Sciences, Politecnico di Torino, Corso Duca degli Abruzzi 24, 10129, Torino, Italy
* Andrea Flamini, Department of Mathematics, University of Trento, Povo, 38123, Trento, Italy
* Andrea Gangemi, Department of Mathematics, University of Trento, Povo, 38123, Trento, Italy
### Abstract
> Group actions are becoming a viable option for post-quantum cryptography assumptions. Indeed, in recent years some works have shown how to construct primitives from assumptions based on isogenies of elliptic curves, such as CSIDH, on tensors or on code equivalence problems. This paper presents a bit commitment scheme, built on non-transitive group actions, which is shown to be secure in the standard model, under the decisional Group Action Inversion Problem. In particular, the commitment is computationally hiding and perfectly binding, and is obtained from a novel and general framework that exploits the properties of some orbit-invariant functions, together with group actions. Previous constructions depend on an interaction between the sender and the receiver in the commitment phase, which results in an interactive bit commitment. We instead propose the first non-interactive bit commitment based on group actions. Then we show that, when the sender is honest, the constructed commitment enjoys an additional feature, i.e., it is possible to tell whether two commitments were obtained from the same input, without revealing the input. We define the security properties that such a construction must satisfy, and we call this primitive linkable commitment. Finally, as an example, an instantiation of the scheme using tensors with coefficients in a finite field is provided. In this case, the invariant function is the computation of the rank of a tensor, and the cryptographic assumption is related to the Tensor Isomorphism problem.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_8](https://doi.org/10.1007/978-981-99-8739-9_8)
## Pseudorandomness of Decoding, Revisited: Adapting OHCP to Code-Based Cryptography.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#pseudorandomness-of-decoding-revisited-adapting-ohcp-to-code-based-cryptography)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#pseudorandomness-of-decoding-revisited-adapting-ohcp-to-code-based-cryptography)
### Authors
* Maxime Bombar, LIX, CNRS UMR 7161, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Alain Couvreur, LIX, CNRS UMR 7161, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Thomas Debris-Alazard, LIX, CNRS UMR 7161, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Maxime Bombar, Inria, Paris, France
* Alain Couvreur, Inria, Paris, France
* Thomas Debris-Alazard, Inria, Paris, France
### Abstract
> Recent code-based cryptosystems rely, among other things, on the hardness of the decisional decoding problem. If the search version is well understood, both from practical and theoretical standpoints, the decision version has been less studied in the literature, and little is known about its relationships with the search version, especially for structured variants. On the other hand, in the world of Euclidean lattices, the situation is rather different, and many reductions exist, both for unstructured and structured versions of the underlying problems. For the latter versions, a powerful tool called the \(\textsf{OHCP}\) framework (for Oracle with Hidden Center Problem), which appears to be very general, has been introduced by Peikert et al. (STOC 2017) and has proved to be very useful as a black box inside reductions.
> 
> In this work, we revisit this technique and extract the very essence of this framework, namely the Oracle Comparison Problem (\(\textsf{OCP}\)), to show how to recover the support of the error, solving an Oracle with Hidden Support Problem (\(\textsf{OHSP}\)), more suitable for code-based cryptography. This yields a new worst-case to average-case search-to-decision reduction for the Decoding Problem, as well as a new average-case to average-case reduction. We then turn to the structured versions and explain why this is not as straightforward as for Euclidean lattices. If we fail to give a search-to-decision reduction for structured codes, we believe that our work opens the way towards new reductions for structured codes, given that the \(\textsf{OHCP}\) framework proved to be so powerful in lattice-based cryptography. Furthermore, we also believe that this technique could be extended to codes endowed with other metrics, such as the rank metric, for which no reduction is known.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_9](https://doi.org/10.1007/978-981-99-8739-9_9)
## Blockwise Rank Decoding Problem and LRPC Codes: Cryptosystems with Smaller Sizes.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#blockwise-rank-decoding-problem-and-lrpc-codes-cryptosystems-with-smaller-sizes)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#blockwise-rank-decoding-problem-and-lrpc-codes-cryptosystems-with-smaller-sizes)
### Authors
* Yongcheng Song, State Key Laboratory of Cryptology, P. O. Box 5159, Beijing, 100878, China
* Jiang Zhang, State Key Laboratory of Cryptology, P. O. Box 5159, Beijing, 100878, China
* Xinyi Huang, Artificial Intelligence Thrust, Information Hub, The Hong Kong University of Science and Technology (Guangzhou), Guangzhou, 511455, China
* Wei Wu, College of Education Sciences, The Hong Kong University of Science and Technology (Guangzhou), Guangzhou, 511455, China
* Wei Wu, School of Mathematics and Statistics, Fujian Normal University, Fuzhou, 350117, China
### Abstract
> In this paper, we initiate the study of the Rank Decoding (RD) problem and LRPC codes with blockwise structures in rank-based cryptosystems. First, we introduce the blockwise errors (\(\ell \)-errors) where each error consists of \(\ell \) blocks of coordinates with disjoint supports, and define the blockwise RD (\(\ell \)-RD) problem as a natural generalization of the RD problem whose solutions are \(\ell \)-errors (note that the standard RD problem is actually a special \(\ell \)-RD problem with \(\ell =1\)). We adapt the typical attacks on the RD problem to the \(\ell \)-RD problem, and find that the blockwise structures do not ease the problem too much: the \(\ell \)-RD problem is still exponentially hard for appropriate choices of \(\ell >1\). Second, we introduce blockwise LRPC (\(\ell \)-LRPC) codes as generalizations of the standard LPRC codes whose parity-check matrices can be divided into \(\ell \) sub-matrices with disjoint supports, i.e., the intersection of two subspaces generated by the entries of any two sub-matrices is a null space, and investigate the decoding algorithms for \(\ell \)-errors. We find that the gain of using \(\ell \)-errors in decoding capacity outweighs the complexity loss in solving the \(\ell \)-RD problem, which makes it possible to design more efficient rank-based cryptosystems with flexible choices of parameters.
> 
> As an application, we show that the two rank-based cryptosystems submitted to the NIST PQC competition, namely, RQC and ROLLO, can be greatly improved by using the ideal variants of the \(\ell \)-RD problem and \(\ell \)-LRPC codes. Concretely, for 128-bit security, our RQC has total public key and ciphertext sizes of 2.5 KB, which is not only about 50% more compact than the original RQC, but also smaller than the NIST Round 4 code-based submissions HQC, BIKE, and Classic McEliece.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_10](https://doi.org/10.1007/978-981-99-8739-9_10)
## SDitH in the QROM.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#sdith-in-the-qrom)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#sdith-in-the-qrom)
### Authors
* Carlos Aguilar-Melchor, SandboxAQ, Palo Alto, USA
* David Joseph, SandboxAQ, Palo Alto, USA
* Dongze Yue, SandboxAQ, Palo Alto, USA
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
* Christian Majenz, Technical University of Denmark, Kgs. Lyngby, Denmark
* Eyal Ronen, Tel Aviv University, Tel Aviv, Israel
### Abstract
> The MPC in the Head (MPCitH) paradigm has recently led to significant improvements for signatures in the code-based setting. In this paper we consider some modifications to a recent twist of MPCitH, called Hypercube-MPCitH, that in the code-based setting provides the currently best known signature sizes. By compressing the Hypercube-MPCitH five-round code-based identification scheme into three-rounds we obtain two main benefits. On the one hand, it allows us to further develop recent techniques to provide a tight security proof in the quantum-accessible random oracle model (QROM), avoiding the catastrophic reduction losses incurred using generic QROM-results for Fiat-Shamir. On the other hand, we can reduce the already low-cost online part of the signature even further. In addition, we propose the use of proof-of-work techniques that allow to reduce the signature size. On the technical side, we develop generalizations of several QROM proof techniques and introduce a variant of the recently proposed extractable QROM.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_11](https://doi.org/10.1007/978-981-99-8739-9_11)
## A New Formulation of the Linear Equivalence Problem and Shorter LESS Signatures.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#a-new-formulation-of-the-linear-equivalence-problem-and-shorter-less-signatures)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#a-new-formulation-of-the-linear-equivalence-problem-and-shorter-less-signatures)
### Authors
* Edoardo Persichetti, Florida Atlantic University, Boca Raton, USA
* Edoardo Persichetti, Sapienza University of Rome, Rome, Italy
* Paolo Santini, Marche Polytechnic University, Ancona, Italy
### Abstract
> The Linear Equivalence Problem (LEP) asks to find a linear isometry between a given pair of linear codes; in the Hamming weight this is known as a monomial map. LEP has been used in cryptography to design the family of LESS signatures, which includes also some advanced schemes, such as ring and identity-based signatures. All of these schemes are obtained applying the Fiat-Shamir transformation to a Sigma protocol, in which the prover’s responses contain a description of how the monomial map acts on all code coordinates; such a description constitutes the vast majority of the signature size. In this paper, we propose a new formulation of LEP, which we refer to as Information-Set (IS)-LEP. Exploiting IS-LEP, it is enough for the prover to provide the description of the monomial action only on an information set, instead of all the coordinates. Thanks to this new formulation, we are able to drastically reduce signature sizes for all LESS signature schemes, without any relevant computational overhead. We prove that IS-LEP and LEP are completely equivalent (indeed, the same problem), which means that improvement comes with no additional security assumption, either.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_12](https://doi.org/10.1007/978-981-99-8739-9_12)
