# Eurocrypt[2021-3]
## sf LogStack: Stacked Garbling with O(b log b) Computation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#sf-logstack-stacked-garbling-with-o-b-log-b-computation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#sf-logstack-stacked-garbling-with-o-b-log-b-computation)
### Authors
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> Secure two party computation (2PC) of arbitrary programs can be efficiently achieved using garbled circuits (GC). Until recently, it was widely believed that a GC proportional to the entire program, including parts of the program that are entirely discarded due to conditional branching, must be transmitted over a network. Recent work shows that this belief is false, and that communication proportional only to the longest program execution path suffices (Heath and Kolesnikov, CRYPTO 20, [HK20a]). Although this recent work reduces needed communication, it increases computation. For a conditional with b branches, the players use \(O(b^2)\) computation (traditional GC uses only O(b)).
> 
> Our scheme \(\textsf {LogStack}\) reduces stacked garbling computation from \(O(b^2)\) to \(O(b \log b)\) with no increase in communication over [HK20a]. The cause of [HK20a]’s increased computation is the oblivious collection of garbage labels that emerge during the evaluation of inactive branches. Garbage is collected by a multiplexer that is costly to generate. At a high level, we redesign stacking and garbage collection to avoid quadratic scaling.
> 
> Our construction is also more space efficient: [HK20a] algorithms require O(b) space, while ours use only \(O(\log b)\) space. This space efficiency allows even modest setups to handle large numbers of branches.
> 
> [HK20a] assumes a random oracle (RO). We track the source of this need, formalize a simple and natural added assumption on the base garbling scheme, and remove reliance on RO: \(\textsf {LogStack}\) is secure in the standard model. Nevertheless, \(\textsf {LogStack}\) can be instantiated with typical GC tricks based on non-standard assumptions, such as free XOR and half-gates, and hence can be implemented with high efficiency.
> 
> We implemented \(\textsf {LogStack}\) (in the RO model, based on half-gates garbling) and report performance. In terms of wall-clock time and for fewer than 16 branches, our performance is comparable to [HK20a]’s; for larger branching factors, our approach clearly outperforms [HK20a]. For example, given 1024 branches, our approach is \(31{\times }\) faster.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_1](https://doi.org/10.1007/978-3-030-77883-5_1)
## Large Scale, Actively Secure Computation from LPN and Free-XOR Garbled Circuits.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#large-scale-actively-secure-computation-from-lpn-and-free-xor-garbled-circuits)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#large-scale-actively-secure-computation-from-lpn-and-free-xor-garbled-circuits)
### Authors
* Kelong Cong, imec-COSIC, KU Leuven, Leuven, Belgium
* Emmanuela Orsini, imec-COSIC, KU Leuven, Leuven, Belgium
* Nigel P. Smart, imec-COSIC, KU Leuven, Leuven, Belgium
* Aner Ben-Efraim, Department of Computer Science, Ariel Univeristy, Ariel, Israel
* Eran Omri, Department of Computer Science, Ariel Univeristy, Ariel, Israel
* Nigel P. Smart, Department of Computer Science, University of Bristol, Bristol, UK
* Eduardo Soria-Vazquez, Department of Computer Science, Aarhus University, Aarhus, Denmark
### Abstract
> We (MPC) protocol based on garbled circuits which is both actively secure and supports the free-XOR technique, and which has communication complexity O(n) per party. This improves on a protocol of Ben-Efraim, Lindell and Omri which only achieved passive security, without support for free-XOR. Our construction is based on a new variant of LPN-based encryption, but has the drawback of requiring a rather expensive garbling phase. To address this issue we present a second protocol that assumes at least n/c of the parties are honest (for an arbitrary fixed value c). This second protocol allows for a significantly lighter preprocessing, at the cost of a small sacrifice in online efficiency. We demonstrate the practicality of our evaluation phase with an implementation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_2](https://doi.org/10.1007/978-3-030-77883-5_2)
## Threshold Garbled Circuits and Ad Hoc Secure Computation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#threshold-garbled-circuits-and-ad-hoc-secure-computation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#threshold-garbled-circuits-and-ad-hoc-secure-computation)
### Authors
* Michele Ciampi, The University of Edinburgh, Edinburgh, UK
* Vipul Goyal, NTT Research and CMU, Pittsburgh, PA, USA
* Rafail Ostrovsky, UCLA Department of Computer Science and Department of Mathematics, Los Angeles, CA, USA
### Abstract
> Garbled Circuits (GCs) represent fundamental and powerful tools in cryptography, and many variants of GCs have been considered since their introduction. An important property of the garbled circuits is that they can be evaluated securely if and only if exactly 1 key for each input wire is obtained: no less and no more. In this work we study the case when: 1) some of the wire-keys are missing, but we are still interested in computing the output of the garbled circuit and 2) the evaluator of the GC might have both keys for a constant number of wires. We start to study this question in terms of non-interactive multi-party computation (NIMPC) which is strongly connected with GCs. In this notion there is a fixed number of parties (n) that can get correlated information from a trusted setup. Then these parties can send an encoding of their input to an evaluator, which can compute the output of the function. Similarly to the notion of ad hoc secure computation proposed by Beimel et al. [ITCS 2016], we consider the case when less than n parties participate in the online phase, and in addition we let these parties colluding with the evaluator. We refer to this notion as Threshold NIMPC.
> 
> In addition, we show that when the number of parties participating in the online phase is a fixed threshold \(l\le n\) then it is possible to securely evaluate any \(l\)-input function. We build our result on top of a new secret-sharing scheme (which can be of independent interest) and on the results proposed by Benhamouda, Krawczyk and Rabin [Crypto 2017]. Our protocol can be used to compute any function in \(NC^1\) in the information-theoretic setting and any function in P assuming one-way functions.
> 
> As a second (and main) contribution, we consider a slightly different notion of security in which the number of parties that can participate in the online phase is not specified, and can be any number c above the threshold \(l\) (in this case the evaluator cannot collude with the other parties). We solve an open question left open by Beimel, Ishai and Kushilevitz [Eurocrypt 2017] showing how to build a secure protocol for the case when c is constant, under the Learning with Errors assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_3](https://doi.org/10.1007/978-3-030-77883-5_3)
## Indistinguishability Obfuscation from Simple-to-State Hard Problems: New Assumptions, New Techniques, and Simplification.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#indistinguishability-obfuscation-from-simple-to-state-hard-problems-new-assumptions-new-techniques-and-simplification)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#indistinguishability-obfuscation-from-simple-to-state-hard-problems-new-assumptions-new-techniques-and-simplification)
### Authors
* Romain Gay, IBM, Zurich, Switzerland
* Aayush Jain, UCLA, Los Angeles, CA, 90095, USA
* Amit Sahai, UCLA, Los Angeles, CA, 90095, USA
* Huijia Lin, University of Washington, Seattle, WA, 98195, USA
### Abstract
> In this work, we study the question of what set of simple-to-state assumptions suffice for constructing functional encryption and indistinguishability obfuscation (\(i\mathcal {O}\)), supporting all functions describable by polynomial-size circuits. Our work improves over the state-of-the-art work of Jain, Lin, Matt, and Sahai (Eurocrypt 2019) in multiple dimensions.
> 
> New Assumption: Previous to our work, all constructions of \(i\mathcal {O}\) from simple assumptions required novel pseudorandomness generators involving LWE samples and constant-degree polynomials over the integers, evaluated on the error of the LWE samples. In contrast, Boolean pseudorandom generators (PRGs) computable by constant-degree polynomials have been extensively studied since the work of Goldreich (2000). (Goldreich and follow-up works study Boolean pseudorandom generators with constant-locality, which can be computed by constant-degree polynomials.) We show how to replace the novel pseudorandom objects over the integers used in previous works, with appropriate Boolean pseudorandom generators with sufficient stretch, when combined with LWE with binary error over suitable parameters. Both binary error LWE and constant degree Goldreich PRGs have been a subject of extensive cryptanalysis since much before our work and thus we back the plausibility of our assumption with security against algorithms studied in context of cryptanalysis of these objects.
> 
> New Techniques: we introduce a number of new techniques:
> 
> – We show how to build partially-hiding public-key functional encryption, supporting degree-2 functions in the secret part of the message, and arithmetic \(\mathsf {NC^1}\) functions over the public part of the message, assuming only standard assumptions over asymmetric pairing groups.
> 
> – We construct single-ciphertext secret-key functional encryption for all circuits with linear key generation, assuming only the LWE assumption.
> 
> Simplification: Unlike prior works, our new techniques furthermore let us construct public-key functional encryption for polynomial-sized circuits directly (without invoking any bootstrapping theorem, nor transformation from secret-key to public key FE), and based only on the polynomial hardness of underlying assumptions. The functional encryption scheme satisfies a strong notion of efficiency where the size of the ciphertext grows only sublinearly in the output size of the circuit and not its size. Finally, assuming that the underlying assumptions are subexponentially hard, we can bootstrap this construction to achieve \(i\mathcal {O}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_4](https://doi.org/10.1007/978-3-030-77883-5_4)
## Candidate Obfuscation via Oblivious LWE Sampling.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#candidate-obfuscation-via-oblivious-lwe-sampling)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#candidate-obfuscation-via-oblivious-lwe-sampling)
### Authors
* Hoeteck Wee, NTT Research Inc., San Francisco, USA
* Daniel Wichs, NTT Research Inc., San Francisco, USA
* Daniel Wichs, Northeastern University, Boston, USA
### Abstract
> We present a new, simple candidate construction of indistinguishability obfuscation (iO). Our scheme is inspired by lattices and learning-with-errors (LWE) techniques, but we are unable to prove security under a standard assumption. Instead, we formulate a new falsifiable assumption under which the scheme is secure. Furthermore, the scheme plausibly achieves post-quantum security.
> 
> Our construction is based on the recent “split FHE” framework of Brakerski, Döttling, Garg, and Malavolta (EUROCRYPT ’20), and we provide a new instantiation of this framework. As a first step, we construct an iO scheme that is provably secure assuming that LWE holds and that it is possible to obliviously generate LWE samples without knowing the corresponding secrets. We define a precise notion of oblivious LWE sampling that suffices for the construction. It is known how to obliviously sample from any distribution (in a very strong sense) using iO, and our result provides a converse, showing that the ability to obliviously sample from the specific LWE distribution (in a much weaker sense) already also implies iO. As a second step, we give a heuristic contraction of oblivious LWE sampling. On a very high level, we do this by homomorphically generating pseudorandom LWE samples using an encrypted pseudorandom function.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_5](https://doi.org/10.1007/978-3-030-77883-5_5)
## Black-Box Non-interactive Non-malleable Commitments.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#black-box-non-interactive-non-malleable-commitments)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#black-box-non-interactive-non-malleable-commitments)
### Authors
* Rachit Garg, University of Texas at Austin, Austin, USA
* George Lu, University of Texas at Austin, Austin, USA
* Brent Waters, University of Texas at Austin, Austin, USA
* Dakshita Khurana, University of Illinois Urbana-Champaign, Urbana, USA
* Brent Waters, NTT Research, Sunnyvale, USA
### Abstract
> There has been recent exciting progress on building non-interactive non-malleable commitments from judicious assumptions. All proposed approaches proceed in two steps. First, obtain simple “base” commitment schemes for very small tag/identity spaces based on a various sub-exponential hardness assumptions. Next, assuming sub-exponential non-interactive witness indistinguishable proofs (NIWIs), and variants of keyless collision resistant hash functions, construct non-interactive compilers that convert tag-based non-malleable commitments for a small tag space into tag-based non-malleable commitments for a larger tag space.
> 
> We propose the first black-box construction of non-interactive non-malleable commitments. Our key technical contribution is a novel implementation of the non-interactive proof of consistency required for tag amplification. Prior to our work, the only known approach to tag amplification without setup and with black-box use of the base scheme (Goyal, Lee, Ostrovsky and Visconti, FOCS 2012) added multiple rounds of interaction.
> 
> Our construction satisfies the strongest known definition of non-malleability, i.e., CCA (chosen commitment attack) security. In addition to being black-box, our approach dispenses with the need for sub-exponential NIWIs, that was common to all prior work. Instead of NIWIs, we rely on sub-exponential hinting PRGs which can be obtained based on a broad set of assumptions such as sub-exponential CDH or LWE.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_6](https://doi.org/10.1007/978-3-030-77883-5_6)
## Non-interactive Distributional Indistinguishability (NIDI) and Non-malleable Commitments.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#non-interactive-distributional-indistinguishability-nidi-and-non-malleable-commitments)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#non-interactive-distributional-indistinguishability-nidi-and-non-malleable-commitments)
### Authors
* Dakshita Khurana, University of Illinois, Urbana-Champaign, Urbana, USA
### Abstract
> We introduce non-interactive distributionally indistinguishable arguments (NIDI) to address a significant weakness of NIWI proofs: namely, the lack of meaningful secrecy when proving statements about \(\mathsf {NP}\) languages with unique witnesses.
> 
> NIDI arguments allow a prover \({\mathcal P} \) to send a single message to verifier \({\mathcal V} \), from which \({\mathcal V} \) obtains a sample d from a (secret) distribution \({\mathcal D} \), together with a proof of membership of d in an NP language \({\mathcal L} \).
> 
> The soundness guarantee is that if the sample d obtained by the verifier \({\mathcal V} \) is not in \({\mathcal L} \), then \({\mathcal V} \) outputs \(\bot \). The privacy guarantee is that secrets about the distribution remain hidden: for every pair of (sufficiently) hard-to-distinguish distributions \({\mathcal D} _0\) and \({\mathcal D} _1\) with support in NP language \({\mathcal L} \), a NIDI that outputs samples from \({\mathcal D} _0\) with proofs of membership in \({\mathcal L} \) is indistinguishable from one that outputs samples from \({\mathcal D} _1\) with proofs of membership in \({\mathcal L} \).
> 
> We build NIDI arguments for superpolynomially hard-to-distinguish distributions, assuming sub-exponential indistinguishability obfuscation and sub-exponentially secure (variants of) one-way functions.
> 
> We demonstrate preliminary applications of NIDI and of our techniques to obtaining the first (relaxed) non-interactive constructions in the plain model, from well-founded assumptions, of:
> 
> Commit-and-prove that provably hides the committed message
> 
> CCA-secure commitments against non-uniform adversaries.
> 
> The commit phase of our commitment schemes consists of a single message from the committer to the receiver, followed by a randomized output by the receiver (that need not be returned to the committer).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_7](https://doi.org/10.1007/978-3-030-77883-5_7)
## Public-Coin Statistical Zero-Knowledge Batch Verification Against Malicious Verifiers.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#public-coin-statistical-zero-knowledge-batch-verification-against-malicious-verifiers)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#public-coin-statistical-zero-knowledge-batch-verification-against-malicious-verifiers)
### Authors
* Inbar Kaslasi, Technion, Haifa, Israel
* Ron D. Rothblum, Technion, Haifa, Israel
* Prashant Nalini Vasudevanr, UC Berkeley, Berkeley, USA
### Abstract
> Suppose that a problem \(\varPi \) has a statistical zero-knowledge (\(\mathsf {SZK}\)) proof with communication complexity m. The question of batch verification for \(\mathsf {SZK}\) asks whether one can prove that k instances \(x_1,\dots ,x_k\) all belong to \(\varPi \) with a statistical zero-knowledge proof whose communication complexity is better than \(k \cdot m\) (which is the complexity of the trivial solution of executing the original protocol independently on each input).
> 
> In a recent work, Kaslasi et al. (TCC, 2020) constructed such a batch verification protocol for any problem having a non-interactive \(\mathsf {SZK}\) (\(\mathsf {NISZK}\)) proof-system. Two drawbacks of their result are that their protocol is private-coin and is only zero-knowledge with respect to the honest verifier.
> 
> In this work, we eliminate these two drawbacks by constructing a public-coin malicious-verifier \(\mathsf {SZK}\) protocol for batch verification of \(\mathsf {NISZK}\). Similarly to the aforementioned prior work, the communication complexity of our protocol is \(\big (k+{\mathsf {poly}}(m) \big ) \cdot \mathrm {polylog}(k,m)\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_8](https://doi.org/10.1007/978-3-030-77883-5_8)
## Efficient Range Proofs with Transparent Setup from Bounded Integer Commitments.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#efficient-range-proofs-with-transparent-setup-from-bounded-integer-commitments)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#efficient-range-proofs-with-transparent-setup-from-bounded-integer-commitments)
### Authors
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
* Michael Klooß, Karlsruhe Institute for Technology, Karlsruhe, Germany
* Huang Lin, Mercury’s Wing and Suterusu Project, Beijing, China
* Michael Reichle, DIENS, École normale supérieure, CNRS, PSL University, 75005, Paris, France
* Michael Reichle, Inria, Paris, France
### Abstract
> We introduce a new approach for constructing range proofs. Our approach is modular, and leads to highly competitive range proofs under standard assumption, using less communication and (much) less computation than the state of the art methods, and without relying on a trusted setup. Our range proofs can be used as a drop-in replacement in a variety of protocols such as distributed ledgers, anonymous transaction systems, and many more, leading to significant reductions in communication and computation for these applications.
> 
> At the heart of our result is a new method to transform any commitment over a finite field into a commitment scheme which allows to commit to and efficiently prove relations about bounded integers. Combining these new commitments with a classical approach for range proofs based on square decomposition, we obtain several new instantiations of a paradigm which was previously limited to RSA-based range proofs (with high communication and computation, and trusted setup). More specifically, we get:
> 
> Under the discrete logarithm assumption, we obtain the most compact and efficient range proof among all existing candidates (with or without trusted setup). Our proofs are \(12\%\) to \(20\%\) shorter than the state of the art Bulletproof (Bootle et al., CRYPTO’18) for standard choices of range size and security parameter, and are more efficient (both for the prover and the verifier) by more than an order of magnitude.
> 
> Under the LWE assumption, we obtain range proofs that improve over the state of the art in a batch setting when at least a few dozen range proofs are required. The amortized communication of our range proofs improves by up to two orders of magnitudes over the state of the art when the number of required range proofs grows.
> 
> Eventually, under standard class group assumptions, we obtain the first concretely efficient standard integer commitment scheme (without bounds on the size of the committed integer) which does not assume trusted setup.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_9](https://doi.org/10.1007/978-3-030-77883-5_9)
## Towards Accountability in CRS Generation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#towards-accountability-in-crs-generation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#towards-accountability-in-crs-generation)
### Authors
* Prabhanjan Ananth, University of California, Santa Barbara, Santa Barbara, USA
* Gilad Asharov, Bar-Ilan University, Ramat Gan, Israel
* Hila Dahari, Weizmann Institute, Rehovot, Israel
* Vipul Goyal, NTT Research and Carnegie Mellon University, Pittsburgh, USA
### Abstract
> It is well known that several cryptographic primitives cannot be achieved without a common reference string (CRS). Those include, for instance, non-interactive zero-knowledge for NP, or maliciously secure computation in fewer than four rounds. The security of those primitives heavily relies upon on the assumption that the trusted authority, who generates the CRS, does not misuse the randomness used in the CRS generation. However, we argue that there is no such thing as an unconditionally trusted authority and every authority must be held accountable for any trust to be well-founded. Indeed, a malicious authority can, for instance, recover private inputs of honest parties given transcripts of the protocols executed with respect to the CRS it has generated.
> 
> While eliminating trust in the trusted authority may not be entirely feasible, can we at least move towards achieving some notion of accountability? We propose a new notion in which, if the CRS authority releases the private inputs of protocol executions to others, we can then provide a publicly-verifiable proof that certifies that the authority misbehaved. We study the feasibility of this notion in the context of non-interactive zero knowledge and two-round secure two-party computation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_10](https://doi.org/10.1007/978-3-030-77883-5_10)
## Robust Property-Preserving Hash Functions for Hamming Distance and More.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#robust-property-preserving-hash-functions-for-hamming-distance-and-more)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#robust-property-preserving-hash-functions-for-hamming-distance-and-more)
### Authors
* Nils Fleischhacker, Ruhr University Bochum, Bochum, Germany
* Mark Simkin, Aarhus University, Aarhus, Denmark
### Abstract
> Robust property-preserving hash (PPH) functions, recently introduced by Boyle, Lavigne, and Vaikuntanathan [ITCS 2019], compress large inputs x and y into short digests h(x) and h(y) in a manner that allows for computing a predicate P on x and y while only having access to the corresponding hash values. In contrast to locality-sensitive hash functions, a robust PPH function guarantees to correctly evaluate a predicate on h(x) and h(y) even if x and y are chosen adversarially after seeing h.
> 
> Our main result is a robust PPH function for the exact hamming distance predicate
> 
> where d(x, y) is the hamming-distance between x and y. Our PPH function compresses n-bit strings into \(\mathcal {O}(t \lambda )\)-bit digests, where \(\lambda \) is the security parameter. The construction is based on the q-strong bilinear discrete logarithm assumption.
> 
> Along the way, we construct a robust PPH function for the set intersection predicate
> 
> which compresses sets X and Y of size n with elements from some arbitrary universe U into \(\mathcal {O}(t\lambda )\)-bit long digests. This PPH function may be of independent interest. We present an almost matching lower bound of \(\varOmega (t \log t)\) on the digest size of any PPH function for the intersection predicate, which indicates that our compression rate is close to optimal. Finally, we also show how to extend our PPH function for the intersection predicate to more than two inputs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_11](https://doi.org/10.1007/978-3-030-77883-5_11)
## Alibi: A Flaw in Cuckoo-Hashing Based Hierarchical ORAM Schemes and a Solution.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#alibi-a-flaw-in-cuckoo-hashing-based-hierarchical-oram-schemes-and-a-solution)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#alibi-a-flaw-in-cuckoo-hashing-based-hierarchical-oram-schemes-and-a-solution)
### Authors
* Brett Hemenway Falk, University of Pennsylvania, Philadelphia, USA
* Daniel Noble, University of Pennsylvania, Philadelphia, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
### Abstract
> There once was a table of hashes
> 
> That held extra items in stashes
> 
> It all seemed like bliss
> 
> But things went amiss
> 
> When the stashes were stored in the caches
> 
> The first Oblivious RAM protocols introduced the “hierarchical solution,” (STOC ’90) where the server stores a series of hash tables of geometrically increasing capacities. Each ORAM query would read a small number of locations from each level of the hierarchy, and each level of the hierarchy would be reshuffled and rebuilt at geometrically increasing intervals to ensure that no single query was ever repeated twice at the same level. This yielded an ORAM protocol with polylogarithmic overhead.
> 
> Future works extended and improved the hierarchical solution, replacing traditional hashing with cuckoo hashing (ICALP ’11) and cuckoo hashing with a combined stash (Goodrich et al. SODA ’12). In this work, we identify a subtle flaw in the protocol of Goodrich et al. (SODA ’12) that uses cuckoo hashing with a stash in the hierarchical ORAM solution.
> 
> We give a concrete distinguishing attack against this type of hierarchical ORAM that uses cuckoo hashing with a combined stash. This security flaw has propagated to at least 5 subsequent hierarchical ORAM protocols, including the recent optimal ORAM scheme, OptORAMa (Eurocrypt ’20).
> 
> In addition to our attack, we identify a simple fix that does not increase the asymptotic complexity.
> 
> We note, however, that our attack only affects more recent hierarchical ORAMs, but does not affect the early protocols that predate the use of cuckoo hashing, or other types of ORAM solutions (e.g. Path ORAM or Circuit ORAM).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_12](https://doi.org/10.1007/978-3-030-77883-5_12)
## Structured Encryption and Dynamic Leakage Suppression.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#structured-encryption-and-dynamic-leakage-suppression)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#structured-encryption-and-dynamic-leakage-suppression)
### Authors
* Marilyn George, Brown University, Providence, USA
* Seny Kamara, Brown University, Providence, USA
* Tarik Moataz, Aroki Systems, Providence, USA
### Abstract
> Structured encryption (STE) schemes encrypt data structures in such a way that they can be privately queried. Special cases of STE include searchable symmetric encryption (SSE) and graph encryption. Like all sub-linear encrypted search solutions, STE leaks information about queries against persistent adversaries. To address this, a line of work on leakage suppression was recently initiated that focuses on techniques to mitigate the leakage of STE schemes.
> 
> A notable example is the query equality suppression framework (Kamara et al. CRYPTO’18) which transforms dynamic STE schemes that leak the query equality into new schemes that do not. Unfortunately, this framework can only produce static schemes and it was left as an open problem to design a solution that could yield dynamic constructions.
> 
> In this work, we propose a dynamic query equality suppression framework that transforms volume-hiding semi-dynamic or mutable STE schemes that leak the query equality into new fully-dynamic constructions that do not. We then use our framework to design three new fully-dynamic STE schemes that are “almost" and fully zero-leakage which, under natural assumptions on the data and query distributions, are asymptotically more efficient than using black-box ORAM simulation. These are the first constructions of their kind.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_13](https://doi.org/10.1007/978-3-030-77883-5_13)
## Dynamic Ad Hoc Clock Synchronization.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#dynamic-ad-hoc-clock-synchronization)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#dynamic-ad-hoc-clock-synchronization)
### Authors
* Christian Badertscher, IOHK, Hong Kong, China
* Peter Gaži, IOHK, Hong Kong, China
* Aggelos Kiayias, IOHK, Hong Kong, China
* Alexander Russell, IOHK, Hong Kong, China
* Aggelos Kiayias, University of Edinburgh, Edinburgh, UK
* Alexander Russell, University of Connecticut, Mansfield, USA
* Vassilis Zikas, Purdue University, West Lafayette, USA
### Abstract
> Clock synchronization allows parties to establish a common notion of global time by leveraging a weaker synchrony assumption, i.e., local clocks with approximately the same speed. Despite intensive investigation of the problem in the fault-tolerant distributed computing literature, existing solutions do not apply to settings where participation is unknown, e.g., the ad hoc model of Beimel et al. [EUROCRYPT 17], or is dynamically shifting over time, e.g., the fluctuating/sleepy/dynamic-availability models of Garay et al. [CRYPTO 17], Pass and Shi [ASIACRYPT 17] and Badertscher et al. [CCS 18].
> 
> We show how to apply and extend ideas from the blockchain literature to devise synchronizers that work in such dynamic ad hoc settings and tolerate corrupted minorities under the standard assumption that local clocks advance at approximately the same speed. We discuss both the setting of honest-majority hashing power and that of a PKI with honest majority. Our main result is a synchronizer that is directly integrated with a new proof-of-stake (PoS) blockchain protocol, Ouroboros Chronos, which we construct and prove secure; to our knowledge, this is the first PoS blockchain protocol to rely only on local clocks, while tolerating worst-case corruption and dynamically fluctuating participation. We believe that this result might be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_14](https://doi.org/10.1007/978-3-030-77883-5_14)
## TARDIS: A Foundation of Time-Lock Puzzles in UC.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#tardis-a-foundation-of-time-lock-puzzles-in-uc)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#tardis-a-foundation-of-time-lock-puzzles-in-uc)
### Authors
* Carsten Baum, Aarhus University, Aarhus, Denmark
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
* Sabine Oechsner, Aarhus University, Aarhus, Denmark
* Bernardo David, IT University of Copenhagen, Copenhagen, Denmark
* Rafael Dowsley, Monash University, Melbourne, Australia
### Abstract
> Time-based primitives like time-lock puzzles (TLP) are finding widespread use in practical protocols, partially due to the surge of interest in the blockchain space where TLPs and related primitives are perceived to solve many problems. Unfortunately, the security claims are often shaky or plainly wrong since these primitives are used under composition. One reason is that TLPs are inherently not UC secure and time is tricky to model and use in the UC model. On the other hand, just specifying standalone notions of the intended task, left alone correctly using standalone notions like non-malleable TLPs only, might be hard or impossible for the given task. And even when possible a standalone secure primitive is harder to apply securely in practice afterwards as its behavior under composition is unclear. The ideal solution would be a model of TLPs in the UC framework to allow simple modular proofs. In this paper we provide a foundation for proving composable security of practical protocols using time-lock puzzles and related timed primitives in the UC model. We construct UC-secure TLPs based on random oracles and show that using random oracles is necessary. In order to prove security, we provide a simple and abstract way to reason about time in UC protocols. Finally, we demonstrate the usefulness of this foundation by constructing applications that are interesting in their own right, such as UC-secure two-party computation with output-independent abort.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_15](https://doi.org/10.1007/978-3-030-77883-5_15)
## On the Power of Multiple Anonymous Messages: Frequency Estimation and Selection in the Shuffle Model of Differential Privacy.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#on-the-power-of-multiple-anonymous-messages-frequency-estimation-and-selection-in-the-shuffle-model-of-differential-privacy)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#on-the-power-of-multiple-anonymous-messages-frequency-estimation-and-selection-in-the-shuffle-model-of-differential-privacy)
### Authors
* Badih Ghazi, Google Research, Mountain View, USA
* Ravi Kumar, Google Research, Mountain View, USA
* Ameya Velingker, Google Research, Mountain View, USA
* Noah Golowich, MIT EECS, Cambridge, USA
* Rasmus Pagh, BARC and University of Copenhagen, Copenhagen, Denmark
### Abstract
> It is well-known that general secure multi-party computation can in principle be applied to implement differentially private mechanisms over distributed data with utility matching the curator (a.k.a. central) model. In this paper we study the power of protocols running on top of a much weaker primitive: A non-interactive anonymous channel, known as the shuffle model in the differential privacy literature. Such protocols are implementable in a scalable way using known cryptographic methods and are known to enable non-interactive, differentially private protocols with error much smaller than what is possible in the local model. We study fundamental counting problems in the shuffle model and obtain tight, up to polylogarithmic factors, bounds on the error and communication in several settings.
> 
> For the classic problem of frequency estimation for n users and a domain of size B, we obtain:
> 
> A nearly tight lower bound of \(\tilde{\varOmega }( \min (\root 4 \of {n}, \sqrt{B}))\) on the \(\ell _\infty \) error in the single-message shuffle model. This implies that the protocols obtained from the amplification via shuffling work of Erlingsson et al. (SODA 2019) and Balle et al. (Crypto 2019) are nearly optimal for single-message protocols.
> 
> Protocols in the multi-message shuffle model with \(\mathrm {poly}(\log {B}, \log {n})\) bits of communication per user and \(\ell _\infty \) error at most \(\mathrm {poly}(\log B, \log n)\), which provide an exponential improvement on the error compared to what is possible with single-message algorithms. This implies protocols with similar error and communication guarantees for several well-studied problems such as heavy hitters, d-dimensional range counting, M-estimation of the median and quantiles, and more generally sparse non-adaptive statistical query algorithms.
> 
> For the selection problem on a domain of size \(B\), we prove:
> 
> A nearly tight lower bound of \(\varOmega (B)\) on the number of users in the single-message shuffle model. This significantly improves on the \(\varOmega (B^{1/17})\) lower bound obtained by Cheu et al. (Eurocrypt 2019).
> 
> A key ingredient in our lower bound proofs is a lower bound on the error of locally-private frequency estimation in the low-privacy (a.k.a. high \(\varepsilon \)) regime. For this we develop new tools to improve the results of Duchi et al. (FOCS 2013; JASA 2018) and Bassily & Smith (STOC 2015), whose techniques only gave tight bounds in the high-privacy setting.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_16](https://doi.org/10.1007/978-3-030-77883-5_16)
## Non-Interactive Anonymous Router.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#non-interactive-anonymous-router)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#non-interactive-anonymous-router)
### Authors
* Elaine Shi, Carnegie Mellon University, Pittsburgh, USA
* Ke Wu, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> Anonymous routing is one of the most fundamental online privacy problems and has been studied extensively for decades. Almost all known approaches for anonymous routing (e.g., mix-nets, DC-nets, and others) rely on multiple servers or routers to engage in some interactive protocol; and anonymity is guaranteed in the threshold model, i.e., if one or more of the servers/routers behave honestly.
> 
> Departing from all prior approaches, we propose a novel non-interactive abstraction called a Non-Interactive Anonymous Router (NIAR), which works even with a single untrusted router. In a NIAR scheme, suppose that n senders each want to talk to a distinct receiver. A one-time trusted setup is performed such that each sender obtains a sending key, each receiver obtains a receiving key, and the router receives a token that “encrypts” the permutation mapping the senders to receivers. In every time step, each sender can encrypt its message using its sender key, and the router can use its token to convert the n ciphertexts received from the senders to n transformed ciphertexts. Each transformed ciphertext is delivered to the corresponding receiver, and the receiver can decrypt the message using its receiver key. Imprecisely speaking, security requires that the untrusted router, even when colluding with a subset of corrupt senders and/or receivers, should not be able to compromise the privacy of honest parties, including who is talking to who, and the message contents.
> 
> We show how to construct a communication-efficient NIAR scheme with provable security guarantees based on the standard Decision Linear assumption in suitable bilinear groups. We show that a compelling application of NIAR is to realize a Non-Interactive Anonymous Shuffler (NIAS), where an untrusted server or data analyst can only decrypt a permuted version of the messages coming from n senders where the permutation is hidden. NIAS can be adopted to construct privacy-preserving surveys, differentially private protocols in the shuffle model, and pseudonymous bulletin boards.
> 
> Besides this main result, we also describe a variant that achieves fault tolerance when a subset of the senders may crash. Finally, we further explore a paranoid notion of security called full insider protection, and show that if we additionally assume sub-exponentially secure Indistinguishability Obfuscation and as sub-exponentially secure one-way functions, one can construct a NIAR scheme with paranoid security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_17](https://doi.org/10.1007/978-3-030-77883-5_17)
## Bifurcated Signatures: Folding the Accountability vs. Anonymity Dilemma into a Single Private Signing Scheme.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#bifurcated-signatures-folding-the-accountability-vs-anonymity-dilemma-into-a-single-private-signing-scheme)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#bifurcated-signatures-folding-the-accountability-vs-anonymity-dilemma-into-a-single-private-signing-scheme)
### Authors
* Benoît Libert, CNRS, Laboratoire LIP, Lyon, France
* Benoît Libert, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Khoa Nguyen, Nanyang Technological University, SPMS, Singapore, Singapore
* Thomas Peters, FNRS and UCLouvain (ICTEAM), Louvain-la-Neuve, Belgium
* Moti Yung, Google and Columbia University, New York City, USA
### Abstract
> Over the development of modern cryptography, often, alternative cryptographic schemes are developed to achieve goals that in some important respect are orthogonal. Thus, we have to choose either a scheme which achieves the first goal and not the second, or vice versa. This results in two types of schemes that compete with each other. In the basic area of user privacy, specifically in anonymous (multi-use credentials) signing, such an orthogonality exists between anonymity and accountability.
> 
> The conceptual contribution of this work is to reverse the above orthogonality by design, which essentially typifies the last 25 years or so, and to suggest an alternative methodology where the opposed properties are carefully folded into a single scheme. The schemes will support both opposing properties simultaneously in a bifurcated fashion, where:
> 
> First, based on rich semantics expressed over the message’s context and content, the user, etc., the relevant property is applied point-wise per message operation depending on a predicate; and
> 
> Secondly, at the same time, the schemes provide what we call “branch-hiding;” namely, the resulting calculated value hides from outsiders which property has actually been locally applied.
> 
> Specifically, we precisely define and give the first construction and security proof of a “Bifurcated Anonymous Signature” (BiAS): A scheme which supports either absolute anonymity or anonymity with accountability, based on a specific contextual predicate, while being branch-hiding. This novel signing scheme has numerous applications not easily implementable or not considered before, especially because: (i) the conditional traceability does not rely on a trusted authority as it is (non-interactively) encapsulated into signatures; and (ii) signers know the predicate value and can make a conscious choice at each signing time.
> 
> Technically, we realize BiAS from homomorphic commitments for a general family of predicates that can be represented by bounded-depth circuits. Our construction is generic and can be instantiated in the standard model from lattices and, more efficiently, from bilinear maps. In particular, the signature length is independent of the circuit size when we use commitments with suitable efficiency properties.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_18](https://doi.org/10.1007/978-3-030-77883-5_18)
## Abuse Resistant Law Enforcement Access Systems.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#abuse-resistant-law-enforcement-access-systems)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#abuse-resistant-law-enforcement-access-systems)
### Authors
* Matthew Green, Johns Hopkins University, Baltimore, USA
* Gijs Van Laer, Johns Hopkins University, Baltimore, USA
* Gabriel Kaptchuk, Boston University, Boston, USA
### Abstract
> The increasing deployment of end-to-end encrypted communications services has ignited a debate between technology firms and law enforcement agencies over the need for lawful access to encrypted communications. Unfortunately, existing solutions to this problem suffer from serious technical risks, such as the possibility of operator abuse and theft of escrow key material. In this work we investigate the problem of constructing law enforcement access systems that mitigate the possibility of unauthorized surveillance. We first define a set of desirable properties for an abuse-resistant law enforcement access system (ARLEAS), and motivate each of these properties. We then formalize these definitions in the Universal Composability (UC) framework, and present two main constructions that realize this definition. The first construction enables prospective access, allowing surveillance only if encryption occurs after a warrant has been issued and activated. The second, more powerful construction, allows retrospective access to communications that occurred prior to a warrant’s issuance. To illustrate the technical challenge of constructing the latter type of protocol, we conclude by investigating the minimal assumptions required to realize these systems.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_19](https://doi.org/10.1007/978-3-030-77883-5_19)
