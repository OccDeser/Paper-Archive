# Asiacrypt[2019-1]
## Streamlined Blockchains: A Simple and Elegant Approach (A Tutorial and Survey).
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#streamlined-blockchains-a-simple-and-elegant-approach-a-tutorial-and-survey)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#streamlined-blockchains-a-simple-and-elegant-approach-a-tutorial-and-survey)
### Authors
* Elaine Shi, Cornell University, Ithaca, USA
### Abstract
> A blockchain protocol (also called state machine replication) allows a set of nodes to agree on an ever-growing, linearly ordered log of transactions. The classical consensus literature suggests two approaches for constructing a blockchain protocol: (1) through composition of single-shot consensus instances often called Byzantine Agreement; and (2) through direct construction of a blockchain where there is no clear-cut boundary between single-shot consensus instances. While conceptually simple, the former approach precludes cross-instance optimizations in a practical implementation. This perhaps explains why the latter approach has gained more traction in practice: specifically, well-known protocols such as Paxos and PBFT all follow the direct-construction approach.
> 
> In this tutorial, we present a new paradigm called “streamlined blockchains” for directly constructing blockchain protocols. This paradigm enables a new family of protocols that are extremely simple and natural: every epoch, a proposer proposes a block extending from a notarized parent chain, and nodes vote if the proposal’s parent chain is not . Whenever a block gains votes, it becomes notarized. Whenever a node observes a notarized chain with blocks of consecutive epochs at the end, then the entire chain chopping off blocks at the end is final.
> 
> By varying the parameters highlighted in , we illustrate two variants for the partially synchronous and synchronous settings respectively. We present very simple proofs of consistency and liveness. We hope that this tutorial provides a compelling argument why this new family of protocols should be used in lieu of classical candidates (e.g., PBFT, Paxos, and their variants), both in practical implementation and for pedagogical purposes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_1](https://doi.org/10.1007/978-3-030-34578-5_1)
## Wave: A New Family of Trapdoor One-Way Preimage Sampleable Functions Based on Codes.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#wave-a-new-family-of-trapdoor-one-way-preimage-sampleable-functions-based-on-codes)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#wave-a-new-family-of-trapdoor-one-way-preimage-sampleable-functions-based-on-codes)
### Authors
* Thomas Debris-Alazard, Sorbonne Université, Collège Doctoral, 75005, Paris, France
* Thomas Debris-Alazard, Inria, Paris, France
* Nicolas Sendrier, Inria, Paris, France
* Jean-Pierre Tillich, Inria, Paris, France
### Abstract
> We present here a new family of trapdoor one-way functions that are Preimage Sampleable on Average (PSA) based on codes, the Wave-PSA family. The trapdoor function is one-way under two computational assumptions: the hardness of generic decoding for high weights and the indistinguishability of generalized \((U,U+V)\)-codes. Our proof follows the GPV strategy [28]. By including rejection sampling, we ensure the proper distribution for the trapdoor inverse output. The domain sampling property of our family is ensured by using and proving a variant of the left-over hash lemma. We instantiate the new Wave-PSA family with ternary generalized \((U,U+V)\)-codes to design a “hash-and-sign” signature scheme which achieves existential unforgeability under adaptive chosen message attacks (EUF-CMA) in the random oracle model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_2](https://doi.org/10.1007/978-3-030-34578-5_2)
## Middle-Product Learning with Rounding Problem and Its Applications.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#middle-product-learning-with-rounding-problem-and-its-applications)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#middle-product-learning-with-rounding-problem-and-its-applications)
### Authors
* Shi Bai, Department of Mathematical Sciences, Florida Atlantic University, Boca Raton, USA
* Katharina Boudgoust, Univ Rennes, CNRS, IRISA, Rennes, France
* Adeline Roux-Langlois, Univ Rennes, CNRS, IRISA, Rennes, France
* Weiqiang Wen, Univ Rennes, CNRS, IRISA, Rennes, France
* Dipayan Das, Department of Mathematics, National Institute of Technology, Durgapur, India
* Zhenfei Zhang, Algorand, Boston, USA
### Abstract
> At CRYPTO 2017, Roşca et al. introduce a new variant of the Learning With Errors (LWE) problem, called the Middle-Product LWE (\({\mathrm {MP}\text {-}\mathrm{LWE}}\)). The hardness of this new assumption is based on the hardness of the Polynomial LWE (P-LWE) problem parameterized by a set of polynomials, making it more secure against the possible weakness of a single defining polynomial. As a cryptographic application, they also provide an encryption scheme based on the \({\mathrm {MP}\text {-}\mathrm{LWE}}\) problem. In this paper, we propose a deterministic variant of their encryption scheme, which does not need Gaussian sampling and is thus simpler than the original one. Still, it has the same quasi-optimal asymptotic key and ciphertext sizes. The main ingredient for this purpose is the Learning With Rounding (LWR) problem which has already been used to derandomize LWE type encryption. The hardness of our scheme is based on a new assumption called Middle-Product Computational Learning With Rounding, an adaption of the computational LWR problem over rings, introduced by Chen et al. at ASIACRYPT 2018. We prove that this new assumption is as hard as the decisional version of MP-LWE and thus benefits from worst-case to average-case hardness guarantees.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_3](https://doi.org/10.1007/978-3-030-34578-5_3)
## A Novel CCA Attack Using Decryption Errors Against LAC.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#a-novel-cca-attack-using-decryption-errors-against-lac)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#a-novel-cca-attack-using-decryption-errors-against-lac)
### Authors
* Qian Guo, Department of Informatics, University of Bergen, Box 7803, 5020, Bergen, Norway
* Qian Guo, Department of Electrical and Information Technology, Lund University, P.O. Box 118, 221 00, Lund, Sweden
* Thomas Johansson, Department of Electrical and Information Technology, Lund University, P.O. Box 118, 221 00, Lund, Sweden
* Jing Yang, Department of Electrical and Information Technology, Lund University, P.O. Box 118, 221 00, Lund, Sweden
### Abstract
> Cryptosystems based on Learning with Errors or related problems are central topics in recent cryptographic research. One main witness to this is the NIST Post-Quantum Cryptography Standardization effort. Many submitted proposals rely on problems related to Learning with Errors. Such schemes often include the possibility of decryption errors with some very small probability. Some of them have a somewhat larger error probability in each coordinate, but use an error correcting code to get rid of errors. In this paper we propose and discuss an attack for secret key recovery based on generating decryption errors, for schemes using error correcting codes. In particular we show an attack on the scheme LAC, a proposal to the NIST Post-Quantum Cryptography Standardization that has advanced to round 2.
> 
> In a standard setting with CCA security, the attack first consists of a precomputation of special messages and their corresponding error vectors. This set of messages are submitted for decryption and a few decryption errors are observed. In a statistical analysis step, these vectors causing the decryption errors are processed and the result reveals the secret key. The attack only works for a fraction of the secret keys. To be specific, regarding LAC256, the version for achieving the 256-bit classical security level, we recover one key among approximately \(2^{64}\) public keys with complexity \(2^{79}\), if the precomputation cost of \(2^{162}\) is excluded. We also show the possibility to attack a more probable key (say with probability \(2^{-16}\)). This attack is verified via extensive simulation.
> 
> We further apply this attack to LAC256-v2, a new version of LAC256 in round 2 of the NIST PQ-project and obtain a multi-target attack with slightly increased precomputation complexity (from \(2^{162}\) to \(2^{171}\)). One can also explain this attack in the single-key setting as an attack with precomputation complexity of \(2^{171}\) and success probability of \(2^{-64}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_4](https://doi.org/10.1007/978-3-030-34578-5_4)
## Towards Attribute-Based Encryption for RAMs from LWE: Sub-linear Decryption, and More.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#towards-attribute-based-encryption-for-rams-from-lwe-sub-linear-decryption-and-more)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#towards-attribute-based-encryption-for-rams-from-lwe-sub-linear-decryption-and-more)
### Authors
* Prabhanjan Ananth, MIT CASIL, Boston, MA, USA
* Xiong Fan, Cornell University, Ithaca, NY, USA
* Elaine Shi, Cornell University, Ithaca, NY, USA
### Abstract
> Attribute based encryption (ABE) is an advanced encryption system with a built-in mechanism to generate keys associated with functions which in turn provide restricted access to encrypted data. Most of the known candidates of attribute based encryption model the functions as circuits. This results in significant efficiency bottlenecks, especially in the setting where the function associated with the ABE key is represented by a random access machine (RAM) and a database, with the runtime of the RAM program being sublinear in the database size. In this work we study the notion of attribute based encryption for random access machines (RAMs), introduced in the work of Goldwasser, Kalai, Popa, Vaikuntanathan and Zeldovich (Crypto 2013). We present a construction of attribute based encryption for RAMs satisfying sublinear decryption complexity assuming learning with errors; this is the first construction based on standard assumptions. Previously, Goldwasser et al. achieved this result based on non-falsifiable knowledge assumptions. We also consider a dual notion of ABE for RAMs, where the database is in the ciphertext and we show how to achieve this dual notion, albeit with large attribute keys, also based on learning with errors.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_5](https://doi.org/10.1007/978-3-030-34578-5_5)
## 4-Round Luby-Rackoff Construction is a qPRP.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#4-round-luby-rackoff-construction-is-a-qprp)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#4-round-luby-rackoff-construction-is-a-qprp)
### Authors
* Akinori Hosoyamada, NTT Secure Platform Laboratories, Tokyo, Japan
* Akinori Hosoyamada, Nagoya University, Nagoya, Japan
* Tetsu Iwata, Nagoya University, Nagoya, Japan
### Abstract
> The Luby-Rackoff construction, or the Feistel construction, is one of the most important approaches to construct secure block ciphers from secure pseudorandom functions. The 3- and 4-round Luby-Rackoff constructions are proven to be secure against chosen-plaintext attacks (CPAs) and chosen-ciphertext attacks (CCAs), respectively, in the classical setting. However, Kuwakado and Morii showed that a quantum superposed chosen-plaintext attack (qCPA) can distinguish the 3-round Luby-Rackoff construction from a random permutation in polynomial time. In addition, Ito et al. recently showed a quantum superposed chosen-ciphertext attack (qCCA) that distinguishes the 4-round Luby-Rackoff construction. Since Kuwakado and Morii showed the result, a problem of much interest has been how many rounds are sufficient to achieve provable security against quantum query attacks. This paper answers to this fundamental question by showing that 4-rounds suffice against qCPAs. Concretely, we prove that the 4-round Luby-Rackoff construction is secure up to \(O(2^{n/12})\) quantum queries. We also give a query upper bound for the problem of distinguishing the 4-round Luby-Rackoff construction from a random permutation by showing a distinguishing qCPA with \(O(2^{n/6})\) quantum queries. Our result is the first to demonstrate the security of a typical block-cipher construction against quantum query attacks, without any algebraic assumptions. To give security proofs, we use an alternative formalization of Zhandry’s compressed oracle technique.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_6](https://doi.org/10.1007/978-3-030-34578-5_6)
## Indifferentiability of Truncated Random Permutations.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#indifferentiability-of-truncated-random-permutations)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#indifferentiability-of-truncated-random-permutations)
### Authors
* Wonseok Choi, KAIST, Daejeon, Korea
* Byeonghak Lee, KAIST, Daejeon, Korea
* Jooyoung Lee, KAIST, Daejeon, Korea
### Abstract
> One of natural ways of constructing a pseudorandom function from a pseudorandom permutation is to simply truncate the output of the permutation. When n is the permutation size and m is the number of truncated bits, the resulting construction is known to be indistinguishable from a random function up to \(2^{{n+m}\over 2}\) queries, which is tight.
> 
> In this paper, we study the indifferentiability of a truncated random permutation where a fixed prefix is prepended to the inputs. We prove that this construction is (regularly) indifferentiable from a public random function up to \(\min \{2^{{n+m}\over 3}, 2^{m}, 2^\ell \}\) queries, while it is publicly indifferentiable up to \(\min \{ \max \{2^{{n+m}\over 3}, 2^{n \over 2}\}, 2^\ell \}\) queries, where \(\ell \) is the size of the fixed prefix. Furthermore, the regular indifferentiability bound is proved to be tight when \(m+\ell \ll n\).
> 
> Our results significantly improve upon the previous bound of \(\min \{ 2^{m \over 2}, 2^\ell \}\) given by Dodis et al. (FSE 2009), allowing us to construct, for instance, an \(\frac{n}{2}\)-to-\(\frac{n}{2}\) bit random function that makes a single call to an n-bit permutation, achieving \(\frac{n}{2}\)-bit security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_7](https://doi.org/10.1007/978-3-030-34578-5_7)
## Anomalies and Vector Space Search: Tools for S-Box Analysis.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#anomalies-and-vector-space-search-tools-for-s-box-analysis)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#anomalies-and-vector-space-search-tools-for-s-box-analysis)
### Authors
* Xavier Bonnetain, Inria, Paris, France
* Léo Perrin, Inria, Paris, France
* Shizhu Tian, Inria, Paris, France
* Xavier Bonnetain, Collège Doctoral, Sorbonne Université, Paris, France
* Shizhu Tian, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Shizhu Tian, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### Abstract
> S-boxes are functions with an input so small that the simplest way to specify them is their lookup table (LUT). How can we quantify the distance between the behavior of a given S-box and that of an S-box picked uniformly at random?
> 
> To answer this question, we introduce various “anomalies”. These real numbers are such that a property with an anomaly equal to a should be found roughly once in a set of \(2^{a}\) random S-boxes. First, we present statistical anomalies based on the distribution of the coefficients in the difference distribution table, linear approximation table, and for the first time, the boomerang connectivity table.
> 
> We then count the number of S-boxes that have block-cipher like structures to estimate the anomaly associated to those. In order to recover these structures, we show that the most general tool for decomposing S-boxes is an algorithm efficiently listing all the vector spaces of a given dimension contained in a given set, and we present such an algorithm.
> 
> Combining these approaches, we conclude that all permutations that are actually picked uniformly at random always have essentially the same cryptographic properties and the same lack of structure.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_8](https://doi.org/10.1007/978-3-030-34578-5_8)
## CSI-FiSh: Efficient Isogeny Based Signatures Through Class Group Computations.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#csi-fish-efficient-isogeny-based-signatures-through-class-group-computations)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#csi-fish-efficient-isogeny-based-signatures-through-class-group-computations)
### Authors
* Ward Beullens, imec-COSIC, ESAT, KU Leuven, Leuven, Belgium
* Frederik Vercauteren, imec-COSIC, ESAT, KU Leuven, Leuven, Belgium
* Thorsten Kleinjung, EPFL IC LACAL, Station 14, 1015, Lausanne, Switzerland
### Abstract
> In this paper we report on a new record class group computation of an imaginary quadratic field having 154-digit discriminant, surpassing the previous record of 130 digits. This class group is central to the CSIDH-512 isogeny based cryptosystem, and knowing the class group structure and relation lattice implies efficient uniform sampling and a canonical representation of its elements. Both operations were impossible before and allow us to instantiate an isogeny based signature scheme first sketched by Stolbunov. We further optimize the scheme using multiple public keys and Merkle trees, following an idea by De Feo and Galbraith. We also show that including quadratic twists allows to cut the public key size in half for free. Optimizing for signature size, our implementation takes 390 ms to sign/verify and results in signatures of 263 bytes, at the expense of a large public key. This is 300 times faster and over 3 times smaller than an optimized version of SeaSign for the same parameter set. Optimizing for public key and signature size combined, results in a total size of 1468 bytes, which is smaller than any other post-quantum signature scheme at the 128-bit security level.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_9](https://doi.org/10.1007/978-3-030-34578-5_9)
## Verifiable Delay Functions from Supersingular Isogenies and Pairings.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#verifiable-delay-functions-from-supersingular-isogenies-and-pairings)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#verifiable-delay-functions-from-supersingular-isogenies-and-pairings)
### Authors
* Luca De Feo, Université Paris Saclay – UVSQ, LMV, CNRS UMR 8100, Versailles, France
* Simon Masson, Thales and Université de Lorraine, Nancy, France
* Christophe Petit, University of Birmingham, Birmingham, UK
* Antonio Sanso, Adobe Inc. and Ruhr Universität Bochum, Bochum, Germany
### Abstract
> We present two new Verifiable Delay Functions (VDF) based on assumptions from elliptic curve cryptography. We discuss both the advantages and drawbacks of our constructions, we study their security and we demonstrate their practicality with a proof-of-concept implementation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_10](https://doi.org/10.1007/978-3-030-34578-5_10)
## Strongly Secure Authenticated Key Exchange from Supersingular Isogenies.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#strongly-secure-authenticated-key-exchange-from-supersingular-isogenies)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#strongly-secure-authenticated-key-exchange-from-supersingular-isogenies)
### Authors
* Xiu Xu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Haiyang Xue, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Kunpeng Wang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Song Tian, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Xiu Xu, Data Assurance and Communications Security Research Center, Beijing, China
* Haiyang Xue, Data Assurance and Communications Security Research Center, Beijing, China
* Kunpeng Wang, Data Assurance and Communications Security Research Center, Beijing, China
* Song Tian, Data Assurance and Communications Security Research Center, Beijing, China
* Haiyang Xue, The Hong Kong Polytechnic University, Hung Hom, Hong Kong
* Man Ho Au, The Hong Kong Polytechnic University, Hung Hom, Hong Kong
* Xiu Xu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Kunpeng Wang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### Abstract
> This paper aims to address the open problem, namely, to find new techniques to design and prove security of supersingular isogeny-based authenticated key exchange (AKE) protocols against the widest possible adversarial attacks, raised by Galbraith in 2018. Concretely, we present two AKEs based on a double-key PKE in the supersingular isogeny setting secure in the sense of CK\(^+\), one of the strongest security models for AKE. Our contributions are summarised as follows. Firstly, we propose a strong OW-CPA secure PKE, \(\mathsf {2PKE_{sidh}}\), based on SI-DDH assumption. By applying modified Fujisaki-Okamoto transformation, we obtain a [OW-CCA, OW-CPA] secure KEM, \(\mathsf {2KEM_{sidh}}\). Secondly, we propose a two-pass AKE, \(\mathsf {SIAKE}_2\), based on SI-DDH assumption, using \(\mathsf {2KEM_{sidh}}\) as a building block. Thirdly, we present a modified version of \(\mathsf {2KEM_{sidh}}\) that is secure against leakage under the 1-Oracle SI-DH assumption. Using the modified \(\mathsf {2KEM_{sidh}}\) as a building block, we then propose a three-pass AKE, \(\mathsf {SIAKE}_3\), based on 1-Oracle SI-DH assumption. Finally, we prove that both \(\mathsf {SIAKE}_2\) and \(\mathsf {SIAKE}_3\) are CK\(^+\) secure in the random oracle model and supports arbitrary registration. We also provide an implementation to illustrate the efficiency of our schemes. Our schemes compare favourably against existing isogeny-based AKEs. To the best of our knowledge, they are the first of its kind to offer security against arbitrary registration, wPFS, KCI, and MEX simultaneously. Regarding efficiency, our schemes outperform existing schemes in terms of bandwidth as well as CPU cycle count.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_11](https://doi.org/10.1007/978-3-030-34578-5_11)
## Dual-Mode NIZKs from Obfuscation.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#dual-mode-nizks-from-obfuscation)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#dual-mode-nizks-from-obfuscation)
### Authors
* Dennis Hofheinz, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Bogdan Ursu, Karlsruhe Institute of Technology, Karlsruhe, Germany
### Abstract
> Two standard security properties of a non-interactive zero-knowledge (NIZK) scheme are soundness and zero-knowledge. But while standard NIZK systems can only provide one of those properties against unbounded adversaries, dual-mode NIZK systems allow to choose dynamically and adaptively which of these properties holds unconditionally. The only known dual-mode NIZK schemes are Groth-Sahai proofs (which have proved extremely useful in a variety of applications), and the FHE-based NIZK constructions of Canetti et al. and Peikert et al, which are concurrent and independent to this work. However, all these constructions rely on specific algebraic settings.
> 
> Here, we provide a generic construction of dual-mode NIZK systems for all of NP. The public parameters of our scheme can be set up in one of two indistinguishable ways. One way provides unconditional soundness, while the other provides unconditional zero-knowledge. Our scheme relies on subexponentially secure indistinguishability obfuscation and subexponentially secure one-way functions, but otherwise only on comparatively mild and generic computational assumptions. These generic assumptions can be instantiated under any one of the DDH, \(k\)-LIN, DCR, or QR assumptions.
> 
> As an application, we reduce the required assumptions necessary for several recent obfuscation-based constructions of multilinear maps. Combined with previous work, our scheme can be used to construct multilinear maps from obfuscation and a group in which the strong Diffie-Hellman assumption holds. We also believe that our work adds to the understanding of the construction of NIZK systems, as it provides a conceptually new way to achieve dual-mode properties.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_12](https://doi.org/10.1007/978-3-030-34578-5_12)
## Output Compression, MPC, and iO for Turing Machines.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#output-compression-mpc-and-io-for-turing-machines)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#output-compression-mpc-and-io-for-turing-machines)
### Authors
* Saikrishna Badrinarayanan, UCLA, Los Angeles, USA
* Rex Fernando, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Venkata Koppula, Weizmann Institute of Science, Rehovot, Israel
* Brent Waters, UT Austin and NTT Research, Austin, USA
### Abstract
> In this work, we study the fascinating notion of output-compressing randomized encodings for Turing Machines, in a shared randomness model. In this model, the encoder and decoder have access to a shared random string, and the efficiency requirement is, the size of the encoding must be independent of the running time and output length of the Turing Machine on the given input, while the length of the shared random string is allowed to grow with the length of the output. We show how to construct output-compressing randomized encodings for Turing machines in the shared randomness model, assuming iO for circuits and any assumption in the set \(\{\)LWE, DDH, N\(^{th}\) Residuosity\(\}\).
> 
> We then show interesting implications of the above result to basic feasibility questions in the areas of secure multiparty computation (MPC) and indistinguishability obfuscation (iO):
> 
> 1. Compact MPC for Turing Machines in the Random Oracle Model. In the context of MPC, we consider the following basic feasibility question: does there exist a malicious-secure MPC protocol for Turing Machines whose communication complexity is independent of the running time and output length of the Turing Machine when executed on the combined inputs of all parties? We call such a protocol as a compact MPC protocol. Hubácek and Wichs [HW15] showed via an incompressibility argument, that, even for the restricted setting of circuits, it is impossible to construct a malicious secure two party computation protocol in the plain model where the communication complexity is independent of the output length. In this work, we show how to evade this impossibility by compiling any (non-compact) MPC protocol in the plain model to a compact MPC protocol for Turing Machines in the Random Oracle Model, assuming output-compressing randomized encodings in the shared randomness model.
> 
> 2. Succinct iO for Turing Machines in the Shared Randomness Model. In all existing constructions of iO for Turing Machines, the size of the obfuscated program grows with a bound on the input length. In this work, we show how to construct an iO scheme for Turing Machines in the shared randomness model where the size of the obfuscated program is independent of a bound on the input length, assuming iO for circuits and any assumption in the set \(\{\)LWE, DDH, N\(^{th}\) Residuosity\(\}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_13](https://doi.org/10.1007/978-3-030-34578-5_13)
## Collusion Resistant Watermarking Schemes for Cryptographic Functionalities.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#collusion-resistant-watermarking-schemes-for-cryptographic-functionalities)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#collusion-resistant-watermarking-schemes-for-cryptographic-functionalities)
### Authors
* Rupeng Yang, School of Computer Science and Technology, Shandong University, Jinan, 250101, China
* Rupeng Yang, Department of Computing, The Hong Kong Polytechnic University, Hung Hom, Hong Kong, China
* Man Ho Au, Department of Computing, The Hong Kong Polytechnic University, Hung Hom, Hong Kong, China
* Zuoxia Yu, Department of Computing, The Hong Kong Polytechnic University, Hung Hom, Hong Kong, China
* Junzuo Lai, College of Information Science and Technology, Jinan University, Guangzhou, 510632, China
* Qiuliang Xu, School of Software, Shandong University, Jinan, 250101, China
### Abstract
> A cryptographic watermarking scheme embeds a message into a program while preserving its functionality. Recently, a number of watermarking schemes have been proposed, which are proven secure in the sense that given one marked program, any attempt to remove the embedded message will substantially change its functionality.
> 
> In this paper, we formally initiate the study of collusion attacks for watermarking schemes, where the attacker’s goal is to remove the embedded messages given multiple copies of the same program, each with a different embedded message. This is motivated by practical scenarios, where a program may be marked multiple times with different messages.
> 
> The results of this work are twofold. First, we examine existing cryptographic watermarking schemes and observe that all of them are vulnerable to collusion attacks. Second, we construct collusion resistant watermarking schemes for various cryptographic functionalities (e.g., pseudorandom function evaluation, decryption, etc.). To achieve our second result, we present a new primitive called puncturable functional encryption scheme, which may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_14](https://doi.org/10.1007/978-3-030-34578-5_14)
## Valiant's Universal Circuits Revisited: An Overall Improvement and a Lower Bound.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#valiants-universal-circuits-revisited-an-overall-improvement-and-a-lower-bound)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#valiants-universal-circuits-revisited-an-overall-improvement-and-a-lower-bound)
### Authors
* Shuoyao Zhao, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Hanlin Liu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Jiang Zhang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shuoyao Zhao, PlatON co., Limited, Hong Kong SAR, China
### Abstract
> A universal circuit (UC) is a general-purpose circuit that can simulate arbitrary circuits (up to a certain size n). At STOC 1976 Valiant presented a graph theoretic approach to the construction of UCs, where a UC is represented by an edge universal graph (EUG) and is recursively constructed using a dedicated graph object (referred to as supernode). As a main end result, Valiant constructed a 4-way supernode of size 19 and an EUG of size \(4.75n\log n\) (omitting smaller terms), which remained the most size-efficient even to this day (after more than 4 decades).
> 
> Motivated by the emerging applications of UCs in various privacy preserving computation scenarios, we revisit Valiant’s universal circuits, and propose a 4-way supernode of size 18, and an EUG of size \(4.5n\log n\). As confirmed by our implementations, we reduce the size of universal circuits (and the number of AND gates) by more than 5% in general, and thus improve upon the efficiency of UC-based cryptographic applications accordingly. Our approach to the design of optimal supernodes is computer aided (rather than by hand as in previous works), which might be of independent interest. As a complement, we give lower bounds on the size of EUGs and UCs in Valiant’s framework, which significantly improves upon the generic lower bound on UC size and therefore reduces the gap between theory and practice of universal circuits.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_15](https://doi.org/10.1007/978-3-030-34578-5_15)
## The Broadcast Message Complexity of Secure Multiparty Computation.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#the-broadcast-message-complexity-of-secure-multiparty-computation)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#the-broadcast-message-complexity-of-secure-multiparty-computation)
### Authors
* Sanjam Garg, University of California, Berkeley, USA
* Aarushi Goel, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
### Abstract
> We study the broadcast message complexity of secure multiparty computation (MPC), namely, the total number of messages that are required for securely computing any functionality in the broadcast model of communication.
> 
> MPC protocols are traditionally designed in the simultaneous broadcast model, where each round consists of every party broadcasting a message to the other parties. We show that this method of communication is sub-optimal; specifically, by eliminating simultaneity, it is, in fact, possible to reduce the broadcast message complexity of MPC.
> 
> More specifically, we establish tight lower and upper bounds on the broadcast message complexity of n-party MPC for every \(t<n\) corruption threshold, both in the plain model as well as common setup models. For example, our results show that the optimal broadcast message complexity of semi-honest MPC can be much lower than 2n, but necessarily requires at least three rounds of communication. We also extend our results to the malicious setting in setup models.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_16](https://doi.org/10.1007/978-3-030-34578-5_16)
## Beyond Honest Majority: The Round Complexity of Fair and Robust Multi-party Computation.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#beyond-honest-majority-the-round-complexity-of-fair-and-robust-multi-party-computation)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#beyond-honest-majority-the-round-complexity-of-fair-and-robust-multi-party-computation)
### Authors
* Arpita Patra, Indian Institute of Science, Bengaluru, India
* Divya Ravi, Indian Institute of Science, Bengaluru, India
### Abstract
> Two of the most sought-after properties of Multi-party Computation (MPC) protocols are fairness and guaranteed output delivery (GOD), the latter also referred to as robustness. Achieving both, however, brings in the necessary requirement of malicious-minority. In a generalised adversarial setting where the adversary is allowed to corrupt both actively and passively, the necessary bound for a n-party fair or robust protocol turns out to be \(t_a + t_p < n\), where \(t_a,t_p\) denote the threshold for active and passive corruption with the latter subsuming the former. Subsuming the malicious-minority as a boundary special case, this setting, denoted as dynamic corruption, opens up a range of possible corruption scenarios for the adversary. While dynamic corruption includes the entire range of thresholds for \((t_a,t_p)\) starting from \((\lceil \frac{n}{2} \rceil - 1, \lfloor n/2 \rfloor )\) to \((0,n-1)\), the boundary corruption restricts the adversary only to the boundary cases of \((\lceil \frac{n}{2} \rceil - 1, \lfloor n/2 \rfloor )\) and \((0,n-1)\). Notably, both corruption settings empower an adversary to control majority of the parties, yet ensuring the count on active corruption never goes beyond \(\lceil \frac{n}{2} \rceil - 1\). We target the round complexity of fair and robust MPC tolerating dynamic and boundary adversaries. As it turns out, \(\lceil n/2 \rceil + 1\) rounds are necessary and sufficient for fair as well as robust MPC tolerating dynamic corruption. The non-constant barrier raised by dynamic corruption can be sailed through for a boundary adversary. The round complexity of 3 and 4 is necessary and sufficient for fair and GOD protocols respectively, with the latter having an exception of allowing 3 round protocols in the presence of a single active corruption. While all our lower bounds assume pair-wise private and broadcast channels and are resilient to the presence of both public (CRS) and private (PKI) setup, our upper bounds are broadcast-only and assume only public setup. The traditional and popular setting of malicious-minority, being restricted compared to both dynamic and boundary setting, requires 3 and 2 rounds in the presence of public and private setup respectively for both fair as well as GOD protocols.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_17](https://doi.org/10.1007/978-3-030-34578-5_17)
## Card-Based Cryptography Meets Formal Verification.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#card-based-cryptography-meets-formal-verification)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#card-based-cryptography-meets-formal-verification)
### Authors
* Alexander Koch, Karlsruhe Institute of Technology (KIT), Karlsruhe, Germany
* Michael Schrempp, Karlsruhe Institute of Technology (KIT), Karlsruhe, Germany
* Michael Kirsten, Karlsruhe Institute of Technology (KIT), Karlsruhe, Germany
### Abstract
> Card-based cryptography provides simple and practicable protocols for performing secure multi-party computation (MPC) with just a deck of cards. For the sake of simplicity, this is often done using cards with only two symbols, e.g., and . Within this paper, we target the setting where all cards carry distinct symbols, catering for use-cases with commonly available standard decks and a weaker indistinguishability assumption. As of yet, the literature provides for only three protocols and no proofs for non-trivial lower bounds on the number of cards. As such complex proofs (handling very large combinatorial state spaces) tend to be involved and error-prone, we propose using formal verification for finding protocols and proving lower bounds. In this paper, we employ the technique of software bounded model checking (SBMC), which reduces the problem to a bounded state space, which is automatically searched exhaustively using a SAT solver as a backend.
> 
> Our contribution is twofold: (a) We identify two protocols for converting between different bit encodings with overlapping bases, and then show them to be card-minimal. This completes the picture of tight lower bounds on the number of cards with respect to runtime behavior and shuffle properties of conversion protocols. For computing , we show that there is no protocol with finite runtime using four cards with distinguishable symbols and fixed output encoding, and give a four-card protocol with an expected finite runtime using only random cuts. (b) We provide a general translation of proofs for lower bounds to a bounded model checking framework for automatically finding card- and length-minimal protocols and to give additional confidence in lower bounds. We apply this to validate our method and, as an example, confirm our new protocol to have a shortest run for protocols using this number of cards.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_18](https://doi.org/10.1007/978-3-030-34578-5_18)
## Quantum Algorithms for the Approximate k-List Problem and Their Application to Lattice Sieving.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#quantum-algorithms-for-the-approximate-k-list-problem-and-their-application-to-lattice-sieving)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#quantum-algorithms-for-the-approximate-k-list-problem-and-their-application-to-lattice-sieving)
### Authors
* Elena Kirshanova, I. Kant Baltic Federal University, Kaliningrad, Russia
* Erik Mårtensson, Department of Electrical and Information Technology, Lund University, Lund, Sweden
* Eamonn W. Postlethwaite, Information Security Group, Royal Holloway, University of London, Egham, UK
* Subhayan Roy Moulik, Department of Computer Science, University of Oxford, Oxford, UK
### Abstract
> The Shortest Vector Problem (SVP) is one of the mathematical foundations of lattice based cryptography. Lattice sieve algorithms are amongst the foremost methods of solving SVP. The asymptotically fastest known classical and quantum sieves solve SVP in a d-dimensional lattice in \(2^{\mathsf {c}d + o(d)}\) time steps with \(2^{\mathsf {c}' d + o(d)}\) memory for constants \(c, c'\). In this work, we give various quantum sieving algorithms that trade computational steps for memory.
> 
> We first give a quantum analogue of the classical k-Sieve algorithm [Herold–Kirshanova–Laarhoven, PKC’18] in the Quantum Random Access Memory (QRAM) model, achieving an algorithm that heuristically solves SVP in \(2^{0.2989d + o(d)}\) time steps using \(2^{0.1395d + o(d)}\) memory. This should be compared to the state-of-the-art algorithm [Laarhoven, Ph.D Thesis, 2015] which, in the same model, solves SVP in \(2^{0.2653d + o(d)}\) time steps and memory. In the QRAM model these algorithms can be implemented using \(\mathrm {poly}(d)\) width quantum circuits.
> 
> Secondly, we frame the k-Sieve as the problem of k-clique listing in a graph and apply quantum k-clique finding techniques to the k-Sieve.
> 
> Finally, we explore the large quantum memory regime by adapting parallel quantum search [Beals et al., Proc. Roy. Soc. A’13] to the 2-Sieve, and give an analysis in the quantum circuit model. We show how to solve SVP in \(2^{0.1037d + o(d)}\) time steps using \(2^{0.2075d + o(d)}\) quantum memory.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_19](https://doi.org/10.1007/978-3-030-34578-5_19)
## Quantum Attacks Without Superposition Queries: The Offline Simon's Algorithm.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#quantum-attacks-without-superposition-queries-the-offline-simons-algorithm)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#quantum-attacks-without-superposition-queries-the-offline-simons-algorithm)
### Authors
* Xavier Bonnetain, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
* André Schrottenloher, Inria, Paris, France
* Akinori Hosoyamada, NTT Secure Platform Laboratories, Tokyo, Japan
* Yu Sasaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Xavier Bonnetain, Collège Doctoral, Sorbonne Université, 75005, Paris, France
* Akinori Hosoyamada, Nagoya University, Nagoya, Japan
### Abstract
> In symmetric cryptanalysis, the model of superposition queries has led to surprising results, with many constructions being broken in polynomial time thanks to Simon’s period-finding algorithm. But the practical implications of these attacks remain blurry. In contrast, the results obtained so far for a quantum adversary making classical queries only are less impressive.
> 
> In this paper, we introduce a new quantum algorithm which uses Simon’s subroutines in a novel way. We manage to leverage the algebraic structure of cryptosystems in the context of a quantum attacker limited to classical queries and offline quantum computations. We obtain improved quantum-time/classical-data tradeoffs with respect to the current literature, while using only as much hardware requirements (quantum and classical) as a standard exhaustive search with Grover’s algorithm. In particular, we are able to break the Even-Mansour construction in quantum time \(\tilde{O}(2^{n/3})\), with \(O(2^{n/3})\) classical queries and \(O(n^2)\) qubits only. In addition, we improve some previous superposition attacks by reducing the data complexity from exponential to polynomial, with the same time complexity.
> 
> Our approach can be seen in two complementary ways: reusing superposition queries during the iteration of a search using Grover’s algorithm, or alternatively, removing the memory requirement in some quantum attacks based on a collision search, thanks to their algebraic structure.
> 
> We provide a list of cryptographic applications, including the Even-Mansour construction, the FX construction, some Sponge authenticated modes of encryption, and many more.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_20](https://doi.org/10.1007/978-3-030-34578-5_20)
## Quantum Random Oracle Model with Auxiliary Input.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#quantum-random-oracle-model-with-auxiliary-input)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#quantum-random-oracle-model-with-auxiliary-input)
### Authors
* Minki Hhan, Seoul National University, Seoul, Republic of Korea
* Keita Xagawa, NTT Secure Platform Laboratories, 3-9-11, Midori-cho Musashino-shi, Tokyo, 180-8585, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, 3-9-11, Midori-cho Musashino-shi, Tokyo, 180-8585, Japan
### Abstract
> The random oracle model (ROM) is an idealized model where hash functions are modeled as random functions that are only accessible as oracles. Although the ROM has been used for proving many cryptographic schemes, it has (at least) two problems. First, the ROM does not capture quantum adversaries. Second, it does not capture non-uniform adversaries that perform preprocessings. To deal with these problems, Boneh et al. (Asiacrypt’11) proposed using the quantum ROM (QROM) to argue post-quantum security, and Unruh (CRYPTO’07) proposed the ROM with auxiliary input (ROM-AI) to argue security against preprocessing attacks. However, to the best of our knowledge, no work has dealt with the above two problems simultaneously.
> 
> In this paper, we consider a model that we call the QROM with (classical) auxiliary input (QROM-AI) that deals with the above two problems simultaneously and study security of cryptographic primitives in the model. That is, we give security bounds for one-way functions, pseudorandom generators, (post-quantum) pseudorandom functions, and (post-quantum) message authentication codes in the QROM-AI.
> 
> We also study security bounds in the presence of quantum auxiliary inputs. In other words, we show a security bound for one-wayness of random permutations (instead of random functions) in the presence of quantum auxiliary inputs. This resolves an open problem posed by Nayebi et al. (QIC’15). In a context of complexity theory, this implies \( \mathsf {NP}\cap \mathsf {coNP} \not \subseteq \mathsf {BQP/qpoly}\) relative to a random permutation oracle, which also answers an open problem posed by Aaronson (ToC’05).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_21](https://doi.org/10.1007/978-3-030-34578-5_21)
## QFactory: Classically-Instructed Remote Secret Qubits Preparation.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#qfactory-classically-instructed-remote-secret-qubits-preparation)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#qfactory-classically-instructed-remote-secret-qubits-preparation)
### Authors
* Alexandru Cojocaru, School of Informatics, University of Edinburgh, 10 Crichton Street, Edinburgh, EH8 9AB, UK
* Elham Kashefi, School of Informatics, University of Edinburgh, 10 Crichton Street, Edinburgh, EH8 9AB, UK
* Petros Wallden, School of Informatics, University of Edinburgh, 10 Crichton Street, Edinburgh, EH8 9AB, UK
* Léo Colisson, Laboratoire d’Informatique de Paris 6 (LIP6), Sorbonne Université, 4 Place Jussieu, 75252, Paris CEDEX 05, France
* Elham Kashefi, Laboratoire d’Informatique de Paris 6 (LIP6), Sorbonne Université, 4 Place Jussieu, 75252, Paris CEDEX 05, France
### Abstract
> The functionality of classically-instructed remotely prepared random secret qubits was introduced in (Cojocaru et al. 2018) as a way to enable classical parties to participate in secure quantum computation and communications protocols. The idea is that a classical party (client) instructs a quantum party (server) to generate a qubit to the server’s side that is random, unknown to the server but known to the client. Such task is only possible under computational assumptions. In this contribution we define a simpler (basic) primitive consisting of only BB84 states, and give a protocol that realizes this primitive and that is secure against the strongest possible adversary (an arbitrarily deviating malicious server). The specific functions used, were constructed based on known trapdoor one-way functions, resulting to the security of our basic primitive being reduced to the hardness of the Learning With Errors problem. We then give a number of extensions, building on this basic module: extension to larger set of states (that includes non-Clifford states); proper consideration of the abort case; and verifiablity on the module level. The latter is based on “blind self-testing”, a notion we introduced, proved in a limited setting and conjectured its validity for the most general case.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_22](https://doi.org/10.1007/978-3-030-34578-5_22)
## Quisquis: A New Design for Anonymous Cryptocurrencies.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#quisquis-a-new-design-for-anonymous-cryptocurrencies)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#quisquis-a-new-design-for-anonymous-cryptocurrencies)
### Authors
* Prastudy Fauzi, Simula UiB, Bergen, Norway
* Sarah Meiklejohn, University College London, London, UK
* Rebekah Mercer, O(1) Labs, San Francisco, USA
* Claudio Orlandi, Department of Computer Science, DIGIT, Aarhus University, Aarhus, Denmark
### Abstract
> Despite their usage of pseudonyms rather than persistent identifiers, most existing cryptocurrencies do not provide users with any meaningful levels of privacy. This has prompted the creation of privacy-enhanced cryptocurrencies such as Monero and Zcash, which are specifically designed to counteract the tracking analysis possible in currencies like Bitcoin. These cryptocurrencies, however, also suffer from some drawbacks: in both Monero and Zcash, the set of potential unspent coins is always growing, which means users cannot store a concise representation of the blockchain. Additionally, Zcash requires a common reference string and the fact that addresses are reused multiple times in Monero has led to attacks to its anonymity.
> 
> In this paper we propose a new design for anonymous cryptocurrencies, Quisquis, that achieves provably secure notions of anonymity. Quisquis stores a relatively small amount of data, does not require trusted setup, and in Quisquis each address appears on the blockchain at most twice: once when it is generated as output of a transaction, and once when it is spent as input to a transaction. Our result is achieved by combining a DDH-based tool (that we call updatable keys) with efficient zero-knowledge arguments.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_23](https://doi.org/10.1007/978-3-030-34578-5_23)
## Divisible E-Cash from Constrained Pseudo-Random Functions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#divisible-e-cash-from-constrained-pseudo-random-functions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#divisible-e-cash-from-constrained-pseudo-random-functions)
### Authors
* Florian Bourse, Orange Labs, Applied Crypto Group, Cesson-Sévigné, France
* Olivier Sanders, Orange Labs, Applied Crypto Group, Cesson-Sévigné, France
* David Pointcheval, DIENS, Ecole normale supérieure, CNRS, PSL University, Paris, France
* David Pointcheval, INRIA, Paris, France
### Abstract
> Electronic cash (e-cash) is the digital analogue of regular cash which aims at preserving users’ privacy. Following Chaum’s seminal work, several new features were proposed for e-cash to address the practical issues of the original primitive. Among them, divisibility has proved very useful to enable efficient storage and spendings. Unfortunately, it is also very difficult to achieve and, to date, quite a few constructions exist, all of them relying on complex mechanisms that can only be instantiated in one specific setting. In addition security models are incomplete and proofs sometimes hand-wavy.
> 
> In this work, we first provide a complete security model for divisible e-cash, and we study the links with constrained pseudo-random functions (PRFs), a primitive recently formalized by Boneh and Waters. We exhibit two frameworks of divisible e-cash systems from constrained PRFs achieving some specific properties: either key homomorphism or delegability. We then formally prove these frameworks, and address two main issues in previous constructions: two essential security notions were either not considered at all or not fully proven. Indeed, we introduce the notion of clearing, which should guarantee that only the recipient of a transaction should be able to do the deposit, and we show the exculpability, that should prevent an honest user to be falsely accused, was wrong in most proofs of the previous constructions. Some can easily be repaired, but this is not the case for most complex settings such as constructions in the standard model. Consequently, we provide the first construction secure in the standard model, as a direct instantiation of our framework.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_24](https://doi.org/10.1007/978-3-030-34578-5_24)
